import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Main Layout
import MainLayout from '../../layout';
// Login Page
import LoginPage from './LoginPage';
// Pages
import DashboardPage from '../../Pages/DashboardPage';
import SantiyeProjeleriPage from '../../Pages/SantiyeProjeleri';
import SantiyeEvraklariPage from '../../Pages/SantiyeEvraklari';
import SantiyeDefteriPage from '../../Pages/SantiyeDefteri';
import EnvanterListesiPage from '../../Pages/EnvanterListesi';
import OnMuhasebeCari from '../../Pages/OnMuhasebeCari';
import PersonelPuantajTablosuPage from '../../Pages/PersonelPuantajTablosu';
import TaseronTeklifleriPage from '../../Pages/TaseronTeklifleri';
import AracKmTablosuPage from '../../Pages/AracKmTablosu';
import AraclarPage from '../../Pages/AracKmTablosu/araclar';
import IsMakinesiCalismaPage from '../../Pages/IsMakinesiCalisma';
import YemekPage from '../../Pages/Yemek';
import IsProgramiPage from '../../Pages/IsProgrami';

// Dynamic Json Router to ComponentPage
const components = {
  '/': DashboardPage,
  '/santiye-proje': SantiyeProjeleriPage,
  '/santiye-evrak': SantiyeEvraklariPage,
  '/santiye-defter': SantiyeDefteriPage,
  '/envanter-listesi': EnvanterListesiPage,
  '/harcama-formu': OnMuhasebeCari,
  '/personel-puantaj': PersonelPuantajTablosuPage,
  '/teklifler': TaseronTeklifleriPage,

  '/is-makinesi': IsMakinesiCalismaPage,
  '/yemek': YemekPage,
  '/is-programi': IsProgramiPage,
  '/araclar': AraclarPage,
  '/takip': AracKmTablosuPage,

  // '/hizli-islem': HizliPage,
};

export default function RouterWrapper() {
  const [menuItems, setMenuItems] = useState([]);
  // Menu.json Fetch
  useEffect(() => {
    fetch('/assets/json/menu.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Response convert JSON
      })
      .then((data) => {
        setMenuItems(data.menu);
      })
      .catch((error) =>
        console.error('Menu.json yüklenirken bir hata oluştu:', error)
      );
  }, []);

  const generateRoutes = (menuItems) => {
    if (!menuItems || !Array.isArray(menuItems)) {
      // Eğer menuItems yoksa ya da dizi değilse, boş dön
      return null;
    }
    return menuItems.flatMap((item) => {
      // item.path yoksa, route oluşturmuyoruz (sadece submenu için route oluşturacağız)
      if (!item.path && item.children && item.children.length > 0) {
        // Alt Menler varsa işleniyor
        return generateRoutes(item.children);
      }
      const Component = components[item.path];
      if (!Component && item.path) {
        console.log(`Component for path "${item.path}" not found.`);
        return null;
      }
      // Eğer item.path varsa ve submenu varsa, route oluşur
      return item.path ? (
        <Route key={item.path} path={item.path} element={<Component />} />
      ) : null;
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<MainLayout menuItems={menuItems} />}>
          {generateRoutes(menuItems)}
        </Route>
      </Routes>
    </Router>
  );
}
