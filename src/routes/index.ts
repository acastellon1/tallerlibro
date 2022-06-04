import { UsuarioRoutes } from "./usuario";
import { AutorRoutes } from "./autor";
import { LibroRoutes } from "./libro";
import { EjemplarRoutes } from "./ejemplar";
import { PrestarRoutes } from "./prestar";

export class Routes {
    public usuarioRoutes: UsuarioRoutes = new UsuarioRoutes();
    public autorRoutes: AutorRoutes = new AutorRoutes();
    public libroRoutes: LibroRoutes = new LibroRoutes();
    public ejemplarRoutes: EjemplarRoutes = new EjemplarRoutes();
    public prestarRoutes: PrestarRoutes = new PrestarRoutes();
}