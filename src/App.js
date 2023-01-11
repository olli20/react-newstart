import paintings from './paitings.json';
import Painting from './components/Painting';

const data0 = paintings[0];
const data1 = paintings[1];
const data2 = paintings[2];

export default function App() {
    return (
        <div>
            <Painting
                url={data0.url}
                title={data0.title}
                author={data0.author.tag}
                authorUrl={data0.author.url}
                price={data0.price}
            />  
            <Painting
                url={data1.url}
                title={data1.title}
                author={data1.author.tag}
                authorUrl={data1.author.url}
                price={data1.price}
            />  
            <Painting
                url={data2.url}
                title={data2.title}
                author={data2.author.tag}
                authorUrl={data2.author.url}
                price={data2.price}
            />  
        </div>);
}

