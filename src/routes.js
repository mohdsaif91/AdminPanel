import React from "react";
import $ from "jquery";

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import("./Demo/Dashboard/Default"));

// const ShopDashBoard = React.lazy(() => import("./shop/Dashboard"));

const UIBasicButton = React.lazy(() =>
  import("./Demo/UIElements/Basic/Button")
);
const UIBasicBadges = React.lazy(() =>
  import("./Demo/UIElements/Basic/Badges")
);
const UIBasicBreadcrumbPagination = React.lazy(() =>
  import("./Demo/UIElements/Basic/BreadcrumbPagination")
);

const UIBasicCollapse = React.lazy(() =>
  import("./Demo/UIElements/Basic/Collapse")
);
const UIBasicTabsPills = React.lazy(() =>
  import("./Demo/UIElements/Basic/TabsPills")
);
const UIBasicBasicTypography = React.lazy(() =>
  import("./Demo/UIElements/Basic/Typography")
);

const FormsElements = React.lazy(() => import("./Demo/Forms/FormsElements"));

const BootstrapTable = React.lazy(() => import("./Demo/Tables/BootstrapTable"));

const Nvd3Chart = React.lazy(() => import("./Demo/Charts/Nvd3Chart/index"));

const GoogleMap = React.lazy(() => import("./Demo/Maps/GoogleMap/index"));

const OtherSamplePage = React.lazy(() => import("./Demo/Other/SamplePage"));
const OtherDocs = React.lazy(() => import("./Demo/Other/Docs"));

const Banner = React.lazy(() => import("./Demo/Shop/Banner"));
const Category = React.lazy(() => import("./Demo/Shop/Category"));
const SubCategory = React.lazy(() => import("./Demo/Shop/SubCategory"));

const ProductList = React.lazy(() => import("./Demo/Shop/ProductList"));
const ProductBucket = React.lazy(() => import("./Demo/Shop/ProductBucket"));
const WeightMaster = React.lazy(() => import("./Demo/Shop/WeightMaster"));

const shopBannerList = React.lazy(() =>
  import("./Demo/ShopBanner/ShopBannerList")
);

const addShopBannerList = React.lazy(() =>
  import("./Demo/ShopBanner/AddShopBannerList")
);
// const addShop = React.lazy(() => import("./Demo/shop/AddShop"));
const addShop = React.lazy(() => import("./Demo/Shop/AddShop"));

const Shop = React.lazy(() => import("./Demo/Shop/Shop"));

const routes = [
  {
    path: "/dashboard/default",
    exact: true,
    name: "Default",
    component: DashboardDefault,
  },
  {
    path: "/basic/button",
    exact: true,
    name: "Basic Button",
    component: UIBasicButton,
  },
  {
    path: "/basic/badges",
    exact: true,
    name: "Basic Badges",
    component: UIBasicBadges,
  },
  {
    path: "/basic/breadcrumb-paging",
    exact: true,
    name: "Basic Breadcrumb Pagination",
    component: UIBasicBreadcrumbPagination,
  },
  {
    path: "/basic/collapse",
    exact: true,
    name: "Basic Collapse",
    component: UIBasicCollapse,
  },
  {
    path: "/basic/tabs-pills",
    exact: true,
    name: "Basic Tabs & Pills",
    component: UIBasicTabsPills,
  },
  {
    path: "/basic/typography",
    exact: true,
    name: "Basic Typography",
    component: UIBasicBasicTypography,
  },
  {
    path: "/forms/form-basic",
    exact: true,
    name: "Forms Elements",
    component: FormsElements,
  },
  {
    path: "/tables/bootstrap",
    exact: true,
    name: "Bootstrap Table",
    component: BootstrapTable,
  },
  {
    path: "/charts/nvd3",
    exact: true,
    name: "Nvd3 Chart",
    component: Nvd3Chart,
  },
  {
    path: "/maps/google-map",
    exact: true,
    name: "Google Map",
    component: GoogleMap,
  },
  {
    path: "/sample-page",
    exact: true,
    name: "Sample Page",
    component: OtherSamplePage,
  },
  { path: "/docs", exact: true, name: "Documentation", component: OtherDocs },

  {
    path: "/banner",
    exact: true,
    name: "Banner",
    component: Banner,
  },
  {
    path: "/category",
    exact: true,
    name: "Category",
    component: Category,
  },
  {
    path: "/subcategory",
    exact: true,
    name: "SubCategory",
    component: SubCategory,
  },
  {
    path: "/productlist",
    exact: true,
    name: "ProductList",
    component: ProductList,
  },
  {
    path: "/productbucket",
    exact: true,
    name: "ProductBucket",
    component: ProductBucket,
  },
  {
    path: "/weightmaster",
    exact: true,
    name: "WeightMaster",
    component: WeightMaster,
  },
  {
    path: "/ShopBannerList",
    exact: true,
    name: "Shop-Banner",
    component: shopBannerList,
  },
  {
    path: "/AddShopBannerList",
    exact: true,
    name: "Add-Shop-Banner",
    component: addShopBannerList,
  },
  // {
  //   path: "/shopDashboard",
  //   exact: true,
  //   name: "shopDashboard",
  //   component: ShopDashBoard,
  // },
  { path: "/addShop", exact: true, name: "Add Shop", component: addShop },
  { path: "/Shop", exact: true, name: "Shop", component: Shop },
];

export default routes;
