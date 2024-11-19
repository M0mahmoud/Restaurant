import Image from "next/image";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="min-h-dvh flex items-center flex-col sm:flex-row">
            <div className="flex-1 flex items-center justify-center p-4 lg:p-8">
                {children}
            </div>

            <div className="relative bg-muted flex-1 flex items-center justify-center min-h-screen max-h-screen min-w-full sm:min-w-[50%]">
                <Image
                    src={"/bon.jpg"}
                    alt="Slider background"
                    fill
                    className="object-cover w-full h-full object-center "
                />
            </div>
        </main>
    );
}
