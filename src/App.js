//import logo from './logo.svg';
import './App.css';
import { AdvertCard } from './components/advert_card/advert_card';
import { AdvertImg } from './components/advert_img/advert_img';
import { DateTxt } from './components/date_txt';
import { News } from './components/news';
import { QLink } from './components/quick_link/quick_link';
import { SearchStr } from './components/search_str/search_str';
import { SpecLink } from './components/spec_link/spec_link';
import { StockEx } from './components/stock_ex/stock_ex';
import { TypeNews } from './components/type_news';
import { Widget } from './components/widget';

function App() {
  return (
    <>
      <table><tr>
        <TypeNews text = "Сейчас в СМИ" link=""/>
        <TypeNews text = "в Германии" link=""/>
        <TypeNews text = "Рекомендуем" link=""/>
        <DateTxt />
      </tr></table>
      <table><tr>
      <td>
        <News icon = "icon-1" text = "text_news-1" link = "link_news-1"/>
        <News icon = "icon-2" text = "text_news-2" link = "link_news-2"/>
        <News icon = "icon-3" text = "text_news-3" link = "link_news-3"/>
        <News icon = "icon-3" text = "text_news-4" link = "link_news-4"/>
        <News icon = "icon-4" text = "text_news-5" link = "link_news-5"/>
        <StockEx />
      </td>
      <td>
        <AdvertCard
          img = "image-1" 
          title = "Работа над ошибками" 
          text = "Смотрите на Яндексе и запоминайте"
          link = "link_advert-1"
        />
      </td>
      </tr></table>
      <table><tr>
        <QLink text = "Видео" link = "link_video"/>
        <QLink text = "Картинки" link = "link_picture"/>
        <QLink text = "Новости" link = "link_news"/>
        <QLink text = "Карты" link = "link_maps"/>
        <QLink text = "Маркет" link = "link_market"/>
        <QLink text = "Переводчик" link = "link_translate"/>
        <QLink text = "Эфир" link = "link_air"/>
        <QLink text = "ещё" link = "link_add"/>   
      </tr></table>
      <SearchStr img = "image-yandex" text = "Найдется всё. Например, фаза луны сегодня" link = "text-link"/> 
      <AdvertImg img = "image-adv" link = "link_advert-2" />
      <div>
        <Widget title = "Погода" link = "link_widget-1">
          <SpecLink
            img = "img-weather-rain" 
            text1 = "+17" 
            text1_type = "text1"
            text2 = "Утром +17, днём +20" 
            text2_type = "text2"
            link = "link_widget-1"
          />
        </Widget>
        <Widget title = "Карта Германии" link = "link_widget-2">
          <SpecLink
            text1 = "Расписания" 
            text1_type = "text2"
            link = "link_widget-2"
          />
        </Widget>
        <Widget title = "Эфир" link = "link_widget-3">
          <SpecLink
            img = "img-air-1" 
            text1 = "Управление как искусство" 
            text1_type = "text2"
            text2 = "Успех" 
            text2_type = "text3"
            link = "link_widget-3-1"
          />
          <SpecLink
            img = "img-air-1" 
            text1 = "Ночь. Мир в это время" 
            text1_type = "text2"
            text2 = "earthTV" 
            text2_type = "text3"
            link = "link_widget-3-2"
          />
          <SpecLink
            img = "img-air-1" 
            text1 = "Андрей Возн..." 
            text1_type = "text2"
            text2 = "Совершенно секретно" 
            text2_type = "text3"
            link = "link_widget-3-3"
          />
        </Widget>
        <Widget title = "Посещаемое" link = "link_widget-4">
          <SpecLink
            text1 = "Недвижимость -" 
            text1_type = "text4"
            text2 = " о сталинках" 
            text2_type = "text2"
            link = "link_widget-4-1"
          />
          <SpecLink
            text1 = "Маркет -" 
            text1_type = "text4"
            text2 = " люстры и светильники" 
            text2_type = "text2"
            link = "link_widget-4-2"
          />
          <SpecLink
            text1 = "Авто.ру -" 
            text1_type = "text4"
            text2 = " привод 4x4 до 500 000" 
            text2_type = "text2"
            link = "link_widget-4-3"
          />
        </Widget>
        <Widget title = "Телепрограмма" link = "link_widget-5" button_link = "air-link-5" button_txt = "Эфир">
          <SpecLink
            text1 = "02:00 ТНТ.Best" 
            text1_type = "text2"
            text2 = "ТНТ International" 
            text2_type = "text3"
            link = "link_widget-5-1"
          />
          <SpecLink
            text1 = "02:15 Джинглики" 
            text1_type = "text2"
            text2 = "Карусель INT" 
            text2_type = "text3"
            link = "link_widget-5-2"
          />
          <SpecLink
            text1 = "02:25 Наедине со всеми" 
            text1_type = "text2"
            text2 = "Первый" 
            text2_type = "text3"
            link = "link_widget-5-3"
          />
        </Widget>
      </div>

    </>
  );
}

export default App;
