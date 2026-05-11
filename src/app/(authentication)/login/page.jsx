import LoginForm from './login'; 

export default async function Page({ searchParams }) {
    const params = await searchParams;
    const callbackUrl = params?.callbackUrl || '/';

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <LoginForm /> 
        </div>
    );
}