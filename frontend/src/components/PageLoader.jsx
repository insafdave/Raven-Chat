function PageLoader() {
  return (
    <div className="h-screen flex items-center justify-center bg-base-100">
        <div className="relative flex items-center justify-center">

            {/* Outer spinning ring */}
            <div className="absolute w-20 h-20 rounded-full border-4 border-transparent border-t-primary border-r-primary animate-spin"/>

            {/* Crow */}
            <svg viewBox="0 0 100 100" className="w-11 h-11 text-primary animate-pulse" fill="currentColor">

                {/* Crow body */}
                <path d="
                    M18 62
                    C25 45, 38 34, 52 36
                    C58 28, 70 25, 78 31
                    C70 32, 66 37, 64 42
                    C76 39, 87 43, 91 50
                    C83 49, 76 51, 70 56
                    C63 64, 25 72, 18 62
                    Z

                    M64 42
                    L92 36
                    L76 49
                    Z

                    M47 39
                    C38 28, 29 24, 20 27
                    C29 32, 35 40, 38 48
                "/>
                <circle cx="74" cy="36" r="2.5" fill="white" />


                </svg>

        </div>
    </div>
  );
}
export default PageLoader;