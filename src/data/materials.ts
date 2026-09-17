import calculadora from "@/assets/calculadora-cientifica.jpg";
import livroCalculo from "@/assets/livro-calculo.jpg";
import jaleco from "@/assets/jaleco-laboratorio.jpg";
import kitDesenho from "@/assets/kit-desenho.jpg";
import atlasAnatomia from "@/assets/atlas-anatomia.jpg";
import kitQuimica from "@/assets/kit-quimica.jpg";

export type MaterialCondition = "Novo" | "Excelente" | "Bom" | "Regular";
export type MaterialStatus = "disponível" | "vendido";

export type Material = {
  id: string;
  titulo: string;
  descricao: string;
  preco: number;
  precoProdutoNovo: number;
  estadoConservacao: MaterialCondition;
  foto: string;
  curso: string;
  categoria: string;
  status: MaterialStatus;
  idVendedor: string;
  vendedor: { nome: string; notaMedia: number };
  destaque: boolean;
};

export const materials: Material[] = [
  {
    id: "mat-001",
    titulo: "Calculadora científica",
    descricao: "Calculadora completa, com capa protetora e todas as funções operando normalmente.",
    preco: 85,
    precoProdutoNovo: 140,
    estadoConservacao: "Bom",
    foto: calculadora,
    curso: "Engenharia",
    categoria: "Calculadoras",
    status: "disponível",
    idVendedor: "usr-001",
    vendedor: { nome: "Marina Alves", notaMedia: 4.8 },
    destaque: true,
  },
  {
    id: "mat-002",
    titulo: "Livro de Cálculo Vol. 1",
    descricao: "Edição completa com marcações leves a lápis e abas de estudo removíveis.",
    preco: 70,
    precoProdutoNovo: 180,
    estadoConservacao: "Regular",
    foto: livroCalculo,
    curso: "Engenharia",
    categoria: "Livros",
    status: "disponível",
    idVendedor: "usr-002",
    vendedor: { nome: "Rafael Santos", notaMedia: 4.9 },
    destaque: true,
  },
  {
    id: "mat-003",
    titulo: "Jaleco branco unissex",
    descricao: "Jaleco tamanho M, higienizado, tecido encorpado e sem manchas.",
    preco: 48,
    precoProdutoNovo: 95,
    estadoConservacao: "Excelente",
    foto: jaleco,
    curso: "Medicina",
    categoria: "Jalecos",
    status: "disponível",
    idVendedor: "usr-003",
    vendedor: { nome: "Camila Rocha", notaMedia: 5 },
    destaque: true,
  },
  {
    id: "mat-004",
    titulo: "Kit de desenho técnico",
    descricao: "Compasso, esquadros, régua metálica e lapiseira para disciplinas de desenho.",
    preco: 55,
    precoProdutoNovo: 120,
    estadoConservacao: "Bom",
    foto: kitDesenho,
    curso: "Arquitetura",
    categoria: "Instrumentos",
    status: "disponível",
    idVendedor: "usr-004",
    vendedor: { nome: "Lucas Melo", notaMedia: 4.7 },
    destaque: true,
  },
  {
    id: "mat-005",
    titulo: "Atlas de anatomia",
    descricao: "Atlas ilustrado, edição grande, páginas preservadas e capa com sinais leves de uso.",
    preco: 110,
    precoProdutoNovo: 260,
    estadoConservacao: "Bom",
    foto: atlasAnatomia,
    curso: "Medicina",
    categoria: "Livros",
    status: "vendido",
    idVendedor: "usr-005",
    vendedor: { nome: "Beatriz Lima", notaMedia: 4.9 },
    destaque: false,
  },
  {
    id: "mat-006",
    titulo: "Kit básico de laboratório",
    descricao: "Vidrarias, óculos e acessórios para aulas práticas introdutórias.",
    preco: 95,
    precoProdutoNovo: 210,
    estadoConservacao: "Novo",
    foto: kitQuimica,
    curso: "Química",
    categoria: "Laboratório",
    status: "disponível",
    idVendedor: "usr-006",
    vendedor: { nome: "João Pedro", notaMedia: 4.6 },
    destaque: false,
  },
];

export const categories = [
  { nome: "Livros", simbolo: "📚" },
  { nome: "Calculadoras", simbolo: "🧮" },
  { nome: "Jalecos", simbolo: "🥼" },
  { nome: "Instrumentos", simbolo: "📐" },
  { nome: "Laboratório", simbolo: "🧪" },
];

export const courses = [...new Set(materials.map((material) => material.curso))].sort();
export const materialCategories = [...new Set(materials.map((material) => material.categoria))].sort();
export const conditions: MaterialCondition[] = ["Novo", "Excelente", "Bom", "Regular"];

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);