import bg from './assets/body-bg.png';
import Header from './components/header/Header';
import WeatherBoard from './components/weather/weatherBoard';
function App() {
    return (
        <div
            className="bg-body font-[Roboto] text-light bg-no-repeat bg-cover h-screen grid place-items-center"
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >
            <Header />
            <main>
                <section>
                    <WeatherBoard/>
                </section>
            </main>
        </div>
    );
}
export default App;
