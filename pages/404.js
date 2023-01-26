import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [router]);

  return (
    <div className="underline text-center">
      <h1>Oooops!</h1>
      <h2>That page cannot be fount</h2>
      <p>
        Go back to the <Link href="/">Homepage</Link>
      </p>
      <p>You will be automatically redirected to Homepage in 5 seconds</p>
    </div>
  );
};

export default ErrorPage;
