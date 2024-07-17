export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                <h1 className="text-6xl font-bold">
                    Welcome to {' '}
                    <a className="text-blue-600" href="https://nextjs.org">
                        Next.js!
                    </a>
                </h1>
                <p className="mt-3 text-2xl">
                    Get started by editing <code>pages/index.js</code>
                </p>
            </main>
        </div>
    )
}
import Landing from './landing';
export default function Home() {
  return <Landing />;
}
