export default function ShowcaseCard() {
    return (
        <div className="w-full max-w-4xl mx-auto overflow-hidden shadow-lg rounded-lg">
            <div className="p-0">
                <div className="flex flex-col md:flex-row">
                    {/* Left side: Project details */}
                    <div className="flex-1 p-6 md:p-8">
                        <h2 className="text-2xl font-bold mb-2">Project Name</h2>
                        <p className="text-gray-600 mb-4">
                            This is a brief description of the project. It showcases the main features and technologies used in the
                            development process.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <button className="px-3 py-2 border rounded-md flex items-center gap-2 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                GitHub
                            </button>
                            <button className="px-3 py-2 border rounded-md flex items-center gap-2 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" x2="21" y1="14" y2="3" /></svg>
                                Live Demo
                            </button>
                        </div>
                    </div>
                    {/* Right side: GIF */}
                    <div className="flex-1">
                        <div className="relative aspect-video">
                            <img
                                src="/placeholder.svg?height=250&width=400"
                                alt="Project Demo GIF"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}