import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-subtle px-6">
      <h1 className="mb-4 font-display text-7xl font-bold text-foreground">404</h1>
      <p className="mb-8 text-xl text-muted-foreground">
        Oops! Page not found
      </p>
      <Button asChild variant="hero" size="lg">
        <Link to="/">
          <Home className="h-4 w-4" />
          Return to Home
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
