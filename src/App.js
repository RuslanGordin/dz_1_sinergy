import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="box-content">
                <h1 className="title">
                    Курс "HTML и CSS. Уровень 1. Создание сайтов на HTML 5 и CSS
                    3"
                </h1>
                <div class="stairs-text">
                    <p>Язык гиперекстовой разметки HTML</p>
                    <p>
                        при помощи тегов и других элементов передаёт информацию
                        о том,
                    </p>
                    <p>
                        как построен текст и как он должен выводиться на экран.
                        Язык
                    </p>
                    <p>
                        каскадных таблиц CSS позволяет оформить веб-страницу,
                        задав
                    </p>
                    <p>необходимые цвет, шрифты и другие элементы стиля.</p>
                </div>
                <h3 className="green_text">
                    На уроке я узнал зачем нужны теги и на практике использовал:
                </h3>
                <ul>
                    <li>теги заголовков</li>
                    <li>тег абзаца</li>
                    <li>блочный тэг</li>
                </ul>
                <h2>Теперь я могу добавить на сайт фото милого котика</h2>
                <img
                    src="https://storage-api.petstory.ru/resize/0x0x80/62/5f/56/625f5638231c40298e13398825fa23da.jpeg"
                    className="img"
                />
                <p>И это только начало!</p>
                <div className="date">14.11.22</div>
            </div>
        </div>
    );
}

export default App;
