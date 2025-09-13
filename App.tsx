import React from 'react';

// Icon components are defined outside the main App component to prevent re-creation on render.

const PlaneIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);

const SocialLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors duration-300">
        {children}
    </a>
);

const InstagramIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266.058 1.644.07 4.85.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
    </svg>
);

const FacebookIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
    </svg>
);

const TwitterIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.791 4.649-.69.188-1.42.248-2.16.084.616 1.924 2.395 3.318 4.491 3.356-1.815 1.423-4.1 2.16-6.59 2.16-.42 0-.83-.024-1.23-.074 2.348 1.506 5.145 2.384 8.134 2.384 9.705 0 14.996-8.034 14.996-14.996 0-.228-.005-.456-.015-.683.92-.665 1.719-1.49 2.363-2.45z" />
    </svg>
);

const App: React.FC = () => {
    return (
        <main 
            className="relative min-h-screen bg-cover bg-center flex items-center justify-center font-montserrat text-white p-4" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-3xl mx-auto">
                <div className="opacity-0 animate-fade-in-up">
                  <PlaneIcon />
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-4 opacity-0 animate-fade-in-up animation-delay-300">
                    Viajes Desde León
                </h1>
                
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto opacity-0 animate-fade-in-up animation-delay-500">
                    Estamos construyendo tu próxima gran aventura. Muy pronto podrás descubrir los mejores destinos y ofertas.
                </p>
                
                <div className="opacity-0 animate-fade-in-up animation-delay-700">
                    <p className="mb-6">Mientras tanto, síguenos en nuestras redes:</p>
                    <div className="flex justify-center items-center space-x-8">
                        <SocialLink href="#">
                            <InstagramIcon />
                        </SocialLink>
                        <SocialLink href="#">
                            <FacebookIcon />
                        </SocialLink>
                        <SocialLink href="#">
                            <TwitterIcon />
                        </SocialLink>
                    </div>
                </div>
            </div>
             <footer className="absolute bottom-4 text-center w-full text-white/50 text-sm z-10">
                &copy; {new Date().getFullYear()} Viajes Desde León. Todos los derechos reservados.
            </footer>
        </main>
    );
};

export default App;
