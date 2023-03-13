import Temas from './Tema';
interface Postagens{
    id: number;
    titulo: string;
    texto: string;
    tema: Temas | null
}

export default Postagens;