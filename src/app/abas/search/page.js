"use client"; // Definindo o componente como um Client Component
import  Item  from "../../../components/Item/item"
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import localImageLogo from "../../../../public/sign-in.svg";


export default function Home({ itens }) {
    // const [searchTerm, setSearchTerm] = useState("");
    const item = { DataEmissao: "Empresa",PrestadorServicoCnpj: "CNPJ", TomadorCnpj: "Tomador" };
    const router = useRouter();
    // const handleSearch = (event) => {
    //     setSearchTerm(event.target.value);
    //   };
    //   const filteredItens = Object.values(itens).filter((item) =>
    //     item?.PrestadorServicoCnpj?.toLowerCase().includes(searchTerm.toLowerCase())
    //   );
    const onClickHandler = () => {
        return 1;
        // setTimeout(() => {
        //   router.push('/abas/search'); // Redireciona após 3 segundos
        // }, 3000); // 3000 milissegundos = 3 segundos
    };

    return (
        <div className={styles.container}>
            <div className={styles.searchHeader}>
                <div className={styles.name}>
                    <Image
                        src={localImageLogo}
                        alt="Logo"
                        className={styles.logo}
                    // width={300}
                    // height={100}
                    />
                    <div><p>Saudações</p><h1>João Paulo</h1></div>
                </div>
                <input type="text" placeholder="Entre com o CNPJ"></input>
            </div>
            <div className={styles.resultsConatiner}>
                <h1>Resultados para {item.PrestadorServicoCnpj}</h1>
                <Item
                DataEmissao={item.DataEmissao}
                PrestadorServicoCnpj={item.PrestadorServicoCnpj}
                TomadorCnpj={item.TomadorCnpj}
                onContactClick={onClickHandler} />
            </div>
            
        </div>
    );
}

// {filteredItens.map((item) => (
//   <div
//     key={contact.id}
//     className={styles.contactClickable}
//     onClick={() => handleClickContact(contact)}
//   >
//     <Item
//      DataEmissao = {item.DataEmissao}
//      PrestadorServicoCnpj = {item.PrestadorServicoCnpj}
//      TomadorCnpj = {item.TomadorCnpj}
//      onContactClick={handleClickContact}
//     />
//   </div>
// ))}