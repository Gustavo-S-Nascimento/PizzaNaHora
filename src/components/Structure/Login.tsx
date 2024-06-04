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

export default function Login() {
    return <Dialog>
        <DialogTrigger><Avatar>
            <AvatarImage src="./CatAvatar.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar></DialogTrigger>
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
                                <Input id="username" placeholder="@JohnDoe" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password-login">Password</Label>
                                <Input id="password-login" type="password" />
                            </div>

                        </CardContent>
                        <CardFooter>
                            <Button>Enter</Button>
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
                                <Input id="name" placeholder="John Doe" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" placeholder="@JohnDoe" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password-register">Password</Label>
                                <Input id="password-register" type="password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Create account</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </DialogContent>
    </Dialog>;
}
