"use client";
/* eslint-disable @next/next/no-img-element */
import "./sobremi.css"
import Link from "next/link"
import { usePathname } from "next/navigation";
export default function Sobremi () {
  const router = usePathname();
return (
  <header>
  <nav>
<ul class="navegacion">
<li>
        <Link href="/" class="nav-link"
        className={

          router.pathname ==="/"
          


        }
   
        
        >Inicio</Link></li>
  <li>
    <Link href="/webdirec/formulario" class="nav-link"
    className={

      router.pathname ==="/webdirec/formulario"
      


    }
    
    >Enviar Correo</Link></li>
  <li><Link href="/webdirec/proyectos" class="nav-link"
   className={

    router.pathname ==="/webdirec/proyectos"
    


  }
  
  >Proyectos</Link></li>
  <li><Link href="/webdirec/sobremi"class="nav-link"
   className={

    router.pathname ==="/webdirec/sobremi"
    


  }
  
  
  >Contacto</Link></li>
</ul>

</nav>

    <div class="sociales">
      <h3>Instagram</h3>
    <a href="https://www.instagram.com/" target="_blank"
    
      ><img
        src="/instagram.svg"
        alt="Instagram"
        loading="lazy"
        class="socicon"
    /></a>
     <h3>Twitter</h3>
    <a href="https://twitter.com/fn19911" target="_blank"
      ><img
        src="/twitter.svg"
        alt="Twitter"
        loading="lazy"
        class="socicon"
    /></a>
     <h3>Linkedin</h3>
    <a href="https://www.linkedin.com/in/claudio-fanelli/" target="_blank"
      ><img
        src="/linkedin.svg"
        alt="Linkedin"
        height={80}
        width={150}
        loading="lazy"
        class="socicon"
    /></a>
     <h3>Github</h3>
    <a href="https://github.com/fn91" target="_blank"
      ><img src="/github.svg" alt="Github" class="socicon"
    />
    </a>

</div>
</header>
)



}