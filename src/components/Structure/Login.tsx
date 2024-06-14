import { useState, useEffect } from "react";
import { z } from "zod";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Validation schemas using Zod
const loginSchema = z.object({
    username: z.string().min(1, 'Username is required'),
    password: z.string().min(1, 'Password is required'),
});

const registerSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    username: z.string().min(1, 'Username is required'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
});

// Data types for form data
type LoginData = z.infer<typeof loginSchema>;
type RegisterData = z.infer<typeof registerSchema>;

const Login: React.FC = () => {
    const [loginData, setLoginData] = useState<LoginData>({ username: '', password: '' });
    const [registerData, setRegisterData] = useState<RegisterData>({ name: '', username: '', password: '' });
    const [loginError, setLoginError] = useState<string | null>(null);
    const [registerError, setRegisterError] = useState<string | null>(null);
    const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

    useEffect(() => {
        const savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
        if (savedUsers.length > 0) {
            setRegisterData(savedUsers[0]);
        }
    }, []);

    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [e.target.id]: e.target.value });
    };

    const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterData({ ...registerData, [e.target.id]: e.target.value });
    };

    const handleLoginSubmit = () => {
        const result = loginSchema.safeParse(loginData);
        if (result.success) {
            const users: RegisterData[] = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find(
                (user) => user.username === loginData.username && user.password === loginData.password
            );
            if (user) {
                setLoginError(null);
                setLoggedInUser(loginData.username);
            } else {
                setLoginError('Invalid username or password');
            }
        } else {
            setLoginError(result.error.errors[0]?.message ?? 'Invalid username or password');
        }
    };

    const handleRegisterSubmit = () => {
        const result = registerSchema.safeParse(registerData);
        if (result.success) {
            const users: RegisterData[] = JSON.parse(localStorage.getItem('users') || '[]');
            users.push(registerData);
            localStorage.setItem('users', JSON.stringify(users));
            setRegisterData({ name: '', username: '', password: '' });
            setRegisterError(null);

            toast.success('Registration successful!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } else {
            const firstError = result.error.errors[0];
            setRegisterError(firstError?.message ?? 'Invalid registration data');

            toast.error('Registration failed. Please check your data.', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    const getAvatarFallback = () => {
        return loggedInUser ? loggedInUser.slice(0, 2).toUpperCase() : 'CN';
    };

    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                style={{ zIndex: 9999 }}
            />
            <Dialog>
                <DialogTrigger>
                    <Avatar>
                        <AvatarImage src={loggedInUser ? '' : './CatAvatar.png'} />
                        <AvatarFallback>{getAvatarFallback()}</AvatarFallback>
                    </Avatar>
                </DialogTrigger>
                <DialogContent className="flex justify-center">
                    <Tabs defaultValue="login" className="w-[400px]">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="login">Login</TabsTrigger>
                            <TabsTrigger value="register">Register</TabsTrigger>
                        </TabsList>
                        <TabsContent value="login">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Sign in</CardTitle>
                                    <CardDescription>Log in with your account.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="username">Username</Label>
                                        <Input
                                            id="username"
                                            placeholder="@JohnDoe"
                                            value={loginData.username}
                                            onChange={handleLoginChange}
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="password">Password</Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            value={loginData.password}
                                            onChange={handleLoginChange}
                                        />
                                    </div>
                                    {loginError && <p className="text-red-500">{loginError}</p>}
                                </CardContent>
                                <CardFooter>
                                    <Button onClick={handleLoginSubmit}>Enter</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                        <TabsContent value="register">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Sign up</CardTitle>
                                    <CardDescription>Create your account.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            placeholder="John Doe"
                                            value={registerData.name}
                                            onChange={handleRegisterChange}
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="username">Username</Label>
                                        <Input
                                            id="username"
                                            placeholder="@JohnDoe"
                                            value={registerData.username}
                                            onChange={handleRegisterChange}
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="password">Password</Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            value={registerData.password}
                                            onChange={handleRegisterChange}
                                        />
                                    </div>
                                    {registerError && <p className="text-red-500">{registerError}</p>}
                                </CardContent>
                                <CardFooter>
                                    <Button onClick={handleRegisterSubmit}>Create account</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Login;
