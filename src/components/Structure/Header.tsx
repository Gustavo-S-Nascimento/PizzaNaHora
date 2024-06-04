import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
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
import { CatIcon } from "@/components/Structure/CatIcon";
import { MenuIcon } from "@/components/Structure/MenuIcon";

export default function Header() {
    return (
        <header className="bg-white shadow-sm w-full fixed">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <a className="flex items-center" href="/PizzaNaHora/">
                    <CatIcon className="h-8 w-8 text-red-500" />
                    <span className="ml-2 text-xl font-bold">Pizzaria Chantly</span>
                </a>
                <nav className="hidden flex justify-center items-center md:flex gap-5">
                    <a className="flex justify-center items-center h-8 text-gray-600 border p-[1px] border-transparent hover:text-white hover:border hover:p-[1px] hover:rounded hover:border-red-500 hover:bg-red-500 transition-all" href="#Home">
                        Início
                    </a>
                    <a className="flex justify-center items-center h-8 text-gray-600 border p-[1px] border-transparent hover:text-white hover:border hover:p-[1px] hover:rounded hover:border-red-500 hover:bg-red-500 transition-all" href="#About">
                        Sobre
                    </a>
                    <a className="flex justify-center items-center h-8 text-gray-600 border p-[1px] border-transparent hover:text-white hover:border hover:p-[1px] hover:rounded hover:border-red-500 hover:bg-red-500 transition-all" href="#Menu">
                        Destaques
                    </a>
                    <Dialog>
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
                    </Dialog>



                </nav>
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 flex justify-center items-center rounded"><MenuIcon className="h-6 w-6" /></SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Pizzaria Chantly</SheetTitle>
                                <Separator></Separator>
                                <SheetDescription>
                                    <a
                                        className="inline-flex items-center justify-center rounded-md bg-red-500 px-6 py-3 text-white shadow-sm transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                        href="menu"
                                    >
                                        Conheça o Cardápio
                                    </a>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
