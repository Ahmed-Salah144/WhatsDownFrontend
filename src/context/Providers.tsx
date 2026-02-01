import AuthProvider from "./AuthContext"
import ThemeProvider from "./ThemeContext"
export default function Providers({children}:{children:React.ReactNode})
{
    return (
    <ThemeProvider>
        <AuthProvider> 
                {children} 
         </AuthProvider>
    </ThemeProvider>
    )
}