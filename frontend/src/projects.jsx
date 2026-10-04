function Projects() {
    return (
            <div className="min-w-0 flex-1 border-4 p-2">
                <h1 className="title text-3xl leading-tight">Projects</h1>
                <p className="desc mt-2 text-base leading-relaxed">
                    <ul>
                        <li><a href="https://github.com/taktojakuba/Justfetch" target="_blank" rel="noopener noreferrer">JustFetch</a></li>
                        <li><a href="https://github.com/taktojakuba/JustRun" target="_blank" rel="noopener noreferrer">JustRun</a></li>
                        <li><a href="https://github.com/taktojakuba/dotfiles" target="_blank" rel="noopener noreferrer">Dotfiles</a></li>
                        <li><a href="https://github.com/taktojakuba/nixos" target="_blank" rel="noopener noreferrer">Nixos Configuration</a></li>
                    </ul>
                </p>
            </div>
    );
}

export default Projects;