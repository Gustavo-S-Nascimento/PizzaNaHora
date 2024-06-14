import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs";
import {
    Dialog,
    DialogContent,
    DialogTrigger
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { z } from "zod";

// Esquemas de validação com Zod
const loginSchema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(1, "Password is required")
});

const registerSchema = z.object({
    name: z.string().min(1, "Name is required"),
    username: z.string().min(1, "Username is required"),
    password: z.string().min(6, "Password must be at least 6 characters long")
});

// Tipos dos dados de formulário
type LoginData = z.infer<typeof loginSchema>;
type RegisterData = z.infer<typeof registerSchema>;

// Função para salvar no LocalStorage
const saveToLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
};

// Função para obter do LocalStorage
const getFromLocalStorage = (key: string) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
};

// Função para obter lista de usuários do LocalStorage
const getUserListFromLocalStorage = (): RegisterData[] => {
    const users = getFromLocalStorage("users");
    return users ? users : [];
};

export default function Login() {
    const [loginData, setLoginData] = useState<LoginData>({ username: "", password: "" });
    const [registerData, setRegisterData] = useState<RegisterData>({ name: "", username: "", password: "" });
    const [loginError, setLoginError] = useState<string | null>(null);

    useEffect(() => {
        // Carrega lista de usuários ao iniciar
        const savedUsers = getUserListFromLocalStorage();
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
            const users = getUserListFromLocalStorage();
            const user = users.find(user => user.username === loginData.username && user.password === loginData.password);
            if (user) {
                console.log("Login successful");
                setLoginError(null);
            } else {
                console.log("Invalid username or password");
                setLoginError("Invalid username or password");
            }
        }
    };

    const handleRegisterSubmit = () => {
        const result = registerSchema.safeParse(registerData);
        if (result.success) {
            const users = getUserListFromLocalStorage();
            users.push(registerData);
            saveToLocalStorage("users", users);
            console.log("Register data is valid and saved");
        }
    };

    return (
        <Dialog>
            <DialogTrigger>
                <Avatar>
                    <AvatarImage src="./CatAvatar.png" />
                    <AvatarFallback>CN</AvatarFallback>
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
                                <CardDescription>
                                    Log in with your account.
                                </CardDescription>
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
                                <CardDescription>
                                    Create your account.
                                </CardDescription>
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
                            </CardContent>
                            <CardFooter>
                                <Button onClick={handleRegisterSubmit}>Create account</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
    );
}
