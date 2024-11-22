import { About } from "./About";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Beneficios } from "./Beneficios";
import { Presentation } from "./Presentation";
import '../css/Dashboard.css';
import { Especificaciones } from "./Especificaciones";
import { Intro } from "./Intro";
import { DetallesTitle } from "./DetallesTitle";
import { Muestra } from "./Muestra";

export function Dashboard(){
    return(
        <>
            <Header/>
            <Intro/>
            <Presentation/>
            <Beneficios/>
            <DetallesTitle/>
            <Muestra/>
            <Especificaciones/>
            <About/>
            <Footer/>
        </>
    )
}