import Temas from './Tema';
interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    tema: Temas | null
}

export default Postagem;
