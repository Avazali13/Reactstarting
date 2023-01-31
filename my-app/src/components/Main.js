import { Info } from "./Info";
import { Buttons } from "./Buttons";


export function Main(props) {

  return (
    <main className={props.class}>
      <Info class="Name">
        Hey there 👋 <br />
        I am Amirhossein
      </Info>
      <Info class="Abouts">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Info>
      <Buttons class='Button'/>
    </main>
  )
}
