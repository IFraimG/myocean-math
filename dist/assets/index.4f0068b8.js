var __defProp = Object.defineProperty;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __assign = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import {m as makeStyles, r as react, B as Button, L as Link, a as axios, u as useSelector, b as useHistory, c as useDispatch, T as TextField, A as Alert, M as Modal, d as Backdrop, F as Fade, C as Card, e as CardContent, f as Typography, g as Tabs, h as Tab, i as AppBar, j as Toolbar, k as FormControl, l as FormLabel, R as RadioGroup, n as FormControlLabel, o as Radio, p as CardActions, q as useParams, s as CircularProgress, t as BrowserRouter, S as Switch, v as Route, w as combineReducers, x as createStore, y as applyMiddleware, z as thunk, D as reactDom, P as Provider} from "./vendor.d90d4bf5.js";
const p = function polyfill(modulePath = ".", importFunctionName = "__import__") {
  try {
    self[importFunctionName] = new Function("u", `return import(u)`);
  } catch (error) {
    const baseURL = new URL(modulePath, location);
    const cleanup = (script) => {
      URL.revokeObjectURL(script.src);
      script.remove();
    };
    self[importFunctionName] = (url) => new Promise((resolve, reject) => {
      const absURL = new URL(url, baseURL);
      if (self[importFunctionName].moduleMap[absURL]) {
        return resolve(self[importFunctionName].moduleMap[absURL]);
      }
      const moduleBlob = new Blob([
        `import * as m from '${absURL}';`,
        `${importFunctionName}.moduleMap['${absURL}']=m;`
      ], {type: "text/javascript"});
      const script = Object.assign(document.createElement("script"), {
        type: "module",
        src: URL.createObjectURL(moduleBlob),
        onerror() {
          reject(new Error(`Failed to import: ${url}`));
          cleanup(script);
        },
        onload() {
          resolve(self[importFunctionName].moduleMap[absURL]);
          cleanup(script);
        }
      });
      document.head.appendChild(script);
    });
    self[importFunctionName].moduleMap = {};
  }
};
p("/assets/");
const colorTheme = {
  orange: "#ffc478",
  light: "#f0e5d8",
  lightGreen: "#bbdfc8",
  green: "#75cfb8",
  yellow: "#ffd000"
};
const fr_stylesButton = makeStyles({
  root: {
    border: 0,
    borderRadius: 3,
    color: "#fff",
    backgroundColor: colorTheme.green,
    fontSize: "12px",
    fontWeight: "bold",
    padding: "20px",
    overflow: "hidden",
    minWidth: "120px",
    height: "40px",
    lineHeight: "20px",
    "&:hover": {
      backgroundColor: colorTheme.lightGreen
    }
  },
  home: {
    background: "rgba(124, 186, 114, 1)",
    borderTop: "2px solid #000",
    borderRight: "2px solid #000",
    borderLeft: "2px solid #000",
    borderBottom: "4px solid #000",
    padding: "20px 40px",
    cursor: "pointer",
    borderRadius: "35px",
    fontSize: "20px",
    "&:focus": {
      outline: "none"
    },
    "&:active": {
      borderTop: "4px solid #000",
      borderBottom: "2px solid #000"
    }
  }
});
const FRbutton = ({children, color = "root", onClick}, props) => {
  const styles2 = fr_stylesButton();
  const currentStyles = styles2[color];
  return /* @__PURE__ */ react.createElement(Button, __assign(__assign({
    onClick
  }, props), {
    className: currentStyles
  }), children);
};
const fr_stylesLink = makeStyles({
  default: {
    color: "#fff",
    fontFamily: "GTRones",
    "&:hover": {
      textDecoration: "none"
    }
  }
});
const FRlink = ({children, href}) => {
  const styles2 = fr_stylesLink();
  return /* @__PURE__ */ react.createElement(Link, {
    className: styles2.default,
    href
  }, children);
};
const fr_stylesModal = makeStyles({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    color: "#000",
    outline: "none",
    border: "none",
    width: "800px"
  },
  cardImageBackground: {
    color: "#000",
    outline: "none",
    border: "none",
    width: "1200px",
    padding: "20px"
  },
  cardImage: {
    maxWidth: "1150px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "50px 0"
  },
  showPassword: {
    display: "flex",
    justifyContent: "flex-end"
  },
  text: {
    fontFamily: "Segoe Print"
  }
});
var AuthEnums;
(function(AuthEnums2) {
  AuthEnums2["SET_USER"] = "myoceanmath/auth/SET_USER";
  AuthEnums2["SET_AUTH"] = "myoceanmath/auth/SET_AUTH";
  AuthEnums2["SET_USER_TOKEN"] = "myoceanmath/auth/SET_USER_TOKEN";
  AuthEnums2["SET_LOADER"] = "myoceanmath/auth/SET_LOADER";
  AuthEnums2["IS_NOT_USER"] = "myoceanmath/auth/IS_NOT_USER";
  AuthEnums2["LOGOUT_USER"] = "myoceanmath/auth/LOGOUT_USER";
  AuthEnums2["SET_LOGIN_ERROR"] = "myoceanmath/auth/SET_LOGIN_ERROR";
  AuthEnums2["SET_FINISHED_TASKS"] = "myoceanmath/auth/SET_FINISHED_TASKS";
  AuthEnums2["SET_LOADER_TASKS"] = "myoceanmath/auth/SET_LOADER_TASKS";
})(AuthEnums || (AuthEnums = {}));
var AppEnums;
(function(AppEnums2) {
  AppEnums2["SET_MODAL"] = "myoceanmath/app/SET_MODAL";
})(AppEnums || (AppEnums = {}));
var LevelEnums;
(function(LevelEnums2) {
  LevelEnums2["GET_TASKS"] = "myoceanmath/level/GET_TASKS";
  LevelEnums2["SET_LEVEL"] = "myoceanmath/level/SET_LEVEL";
  LevelEnums2["SET_CURRENT_TASK"] = "myoceanmath/level/SET_CURRENT_TASK";
  LevelEnums2["SET_FINISHED"] = "myoceanmath/level/SET_FINISHED";
  LevelEnums2["CLEAR_TASKS"] = "myoceanmath/level/CLEAR_TASKS";
  LevelEnums2["SET_ERROR"] = "myoceanmath/level/SET_ERROR";
  LevelEnums2["GET_ERRORS"] = "myoceanmath/level/GET_ERRORS";
})(LevelEnums || (LevelEnums = {}));
const setModalAction = (isModal) => ({type: AppEnums.SET_MODAL, payload: isModal});
const setUserAction = (user) => ({type: AuthEnums.SET_USER, payload: user});
const setAuthAction = (isAuth) => ({type: AuthEnums.SET_AUTH, payload: isAuth});
const setLoaderAction = (isLoader) => ({type: AuthEnums.SET_LOADER, payload: isLoader});
const setUserTokenAction = (user) => ({type: AuthEnums.SET_USER_TOKEN, payload: user});
const checkUserAction = (isUser) => ({type: AuthEnums.IS_NOT_USER, payload: isUser});
const logoutUserAction = () => ({type: AuthEnums.LOGOUT_USER});
const setErrorLoginAction = (err) => ({type: AuthEnums.SET_LOGIN_ERROR, payload: err});
const setFinishedTasksAction = (tasksList) => ({type: AuthEnums.SET_FINISHED_TASKS, payload: tasksList});
const setLoaderTasksAction = (isLoaderTasks) => ({type: AuthEnums.SET_LOADER_TASKS, payload: isLoaderTasks});
const AuthAPI = {
  registration: async (user) => {
    try {
      let res = await axios.post("https://myoceanmathserver.herokuapp.com/auth/create", user);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
  login: async (user) => {
    try {
      let res = await axios.post("https://myoceanmathserver.herokuapp.com/auth/login", {username: user.email, password: user.password});
      return res.data;
    } catch (error) {
      return error;
    }
  },
  checkauth: async () => {
    try {
      let token = localStorage.getItem("token");
      if (token == null)
        return {isAuth: false};
      let res = await axios.get("https://myoceanmathserver.herokuapp.com/auth/check", {headers: {Authorization: "Bearer " + token}});
      return __assign(__assign({}, res.data), {isAuth: true});
    } catch (error) {
      console.log(error);
      return {isAuth: false};
    }
  },
  getFullData: async (userID) => {
    try {
      let res = await axios.get("https://myoceanmathserver.herokuapp.com/users/id/" + userID);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
  getFinishedTasks: async (userID) => {
    try {
      let res = await axios.get("https://myoceanmathserver.herokuapp.com/users/finished/" + userID);
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
};
let stateDefault$2 = {
  user: null,
  tasksList: null,
  tokenUser: null,
  isAuth: false,
  isLoaderTasks: false,
  isLoader: false,
  isNotUser: false,
  errorLogin: ""
};
const AuthReducer = (state = stateDefault$2, action) => {
  switch (action.type) {
    case AuthEnums.SET_USER: {
      return __assign(__assign({}, state), {user: action.payload});
    }
    case AuthEnums.SET_AUTH: {
      return __assign(__assign({}, state), {isAuth: action.payload});
    }
    case AuthEnums.SET_USER_TOKEN: {
      return __assign(__assign({}, state), {tokenUser: action.payload});
    }
    case AuthEnums.SET_LOADER: {
      return __assign(__assign({}, state), {isLoader: action.payload});
    }
    case AuthEnums.IS_NOT_USER: {
      return __assign(__assign({}, state), {isNotUser: action.payload});
    }
    case AuthEnums.LOGOUT_USER: {
      return __assign(__assign({}, state), {user: null, tokenUser: null, isAuth: false});
    }
    case AuthEnums.SET_LOGIN_ERROR: {
      return __assign(__assign({}, state), {errorLogin: action.payload});
    }
    case AuthEnums.SET_FINISHED_TASKS: {
      return __assign(__assign({}, state), {tasksList: action.payload});
    }
    case AuthEnums.SET_LOADER_TASKS: {
      return __assign(__assign({}, state), {isLoaderTasks: action.payload});
    }
    default:
      return __assign({}, state);
  }
};
const registrationThunk = (user) => async (dispatch) => {
  let data = await AuthAPI.registration(user);
  localStorage.setItem("token", data.token);
  dispatch(setUserAction(data.user));
  dispatch(setModalAction(false));
};
const loginThunk = (user) => async (dispatch) => {
  let data = await AuthAPI.login(user);
  if ((data == null ? void 0 : data.message) == "Request failed with status code 401") {
    dispatch(setErrorLoginAction("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0441 \u0442\u0430\u043A\u0438\u043C \u043F\u0430\u0440\u043E\u043B\u0435\u043C \u0438\u043B\u0438 \u043F\u043E\u0447\u0442\u043E\u0439 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"));
  } else {
    localStorage.setItem("token", data.token);
    dispatch(setUserAction(data.user));
    await dispatch(setModalAction(false));
    dispatch(setErrorLoginAction(""));
  }
};
const setFullData = (userID) => async (dispatch) => {
  dispatch(setLoaderAction(true));
  let data = await AuthAPI.getFullData(userID);
  if (data == "")
    dispatch(checkUserAction(true));
  else {
    dispatch(checkUserAction(false));
    dispatch(setUserAction(data));
  }
  console.log(data);
  dispatch(setLoaderAction(false));
};
const logout = () => (dispatch) => {
  window.sessionStorage.clear();
  window.localStorage.clear();
  document.cookie = "";
  dispatch(logoutUserAction());
};
const getFinishedTasksThunk = (userID) => async (dispatch) => {
  dispatch(setLoaderTasksAction(true));
  let tasks = await AuthAPI.getFinishedTasks(userID);
  dispatch(setFinishedTasksAction(tasks));
  dispatch(setLoaderTasksAction(false));
};
const Registration = () => {
  const modalStyles = fr_stylesModal();
  const [regData, setData] = react.useState({email: "", password: "", login: ""});
  const passwordInput = react.useRef(null);
  const {isAuth, user, errorLogin} = useSelector((state) => state.AuthReducer);
  const history = useHistory();
  const dispatch = useDispatch();
  const sendData = () => {
    dispatch(registrationThunk(regData));
    if (isAuth)
      history.push("/profile/" + user.id);
  };
  return /* @__PURE__ */ react.createElement("form", {
    className: modalStyles.form
  }, /* @__PURE__ */ react.createElement(TextField, {
    name: "login",
    label: "\u041B\u043E\u0433\u0438\u043D",
    variant: "outlined",
    onChange: (event) => setData(__assign(__assign({}, regData), {login: event.target.value}))
  }), /* @__PURE__ */ react.createElement(TextField, {
    name: "email",
    label: "Email",
    variant: "outlined",
    onChange: (event) => setData(__assign(__assign({}, regData), {email: event.target.value}))
  }), /* @__PURE__ */ react.createElement(TextField, {
    type: "password",
    name: "password",
    label: "Password",
    ref: passwordInput,
    variant: "outlined",
    onChange: (event) => setData(__assign(__assign({}, regData), {password: event.target.value}))
  }), errorLogin != "" ? /* @__PURE__ */ react.createElement(Alert, {
    variant: "filled",
    color: "error"
  }, errorLogin) : "", /* @__PURE__ */ react.createElement(FRbutton, {
    onClick: sendData
  }, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"));
};
const Login = () => {
  const modalStyles = fr_stylesModal();
  const [regData, setData] = react.useState({email: "", login: "", password: ""});
  const dispatch = useDispatch();
  const history = useHistory();
  const {errorLogin, user} = useSelector((state) => state.AuthReducer);
  const sendData = async () => {
    dispatch(loginThunk(regData));
  };
  react.useEffect(() => {
    if (user != null)
      history.push("/profile/" + user.id);
  }, [user]);
  return /* @__PURE__ */ react.createElement("form", {
    className: modalStyles.form
  }, /* @__PURE__ */ react.createElement(TextField, {
    name: "email",
    label: "Email",
    variant: "outlined",
    onChange: (event) => setData(__assign(__assign({}, regData), {email: event.target.value}))
  }), /* @__PURE__ */ react.createElement(TextField, {
    type: "password",
    name: "password",
    label: "Password",
    variant: "outlined",
    onChange: (event) => setData(__assign(__assign({}, regData), {password: event.target.value}))
  }), errorLogin != "" ? /* @__PURE__ */ react.createElement(Alert, {
    variant: "filled",
    color: "error"
  }, errorLogin) : "", /* @__PURE__ */ react.createElement(FRbutton, {
    onClick: sendData
  }, "\u0412\u043E\u0439\u0442\u0438"));
};
const ModalAuth = ({isModal, setOpen, errorLogin}) => {
  const modalStyles = fr_stylesModal();
  const [tabAuth, setTabs] = react.useState(0);
  const dispatch = useDispatch();
  const changeTabs = (event, tab) => {
    dispatch(setErrorLoginAction(""));
    setTabs(tab);
  };
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(Modal, {
    "aria-labelledby": "transition-modal-title",
    "aria-describedby": "transition-modal-description",
    open: isModal,
    onClose: () => setOpen(false),
    closeAfterTransition: true,
    BackdropComponent: Backdrop,
    BackdropProps: {timeout: 500},
    className: modalStyles.modal
  }, /* @__PURE__ */ react.createElement(Fade, {
    in: isModal
  }, /* @__PURE__ */ react.createElement(Card, {
    className: modalStyles.card,
    variant: "outlined"
  }, /* @__PURE__ */ react.createElement(CardContent, null, /* @__PURE__ */ react.createElement("div", {
    style: {display: "flex", alignItems: "center", justifyContent: "space-around", marginBottom: "20px"}
  }, /* @__PURE__ */ react.createElement(Typography, {
    className: modalStyles.text,
    variant: "h4"
  }, "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F"), /* @__PURE__ */ react.createElement(Tabs, {
    indicatorColor: "primary",
    textColor: "primary",
    value: tabAuth,
    onChange: changeTabs
  }, /* @__PURE__ */ react.createElement(Tab, {
    className: modalStyles.text,
    label: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
  }), /* @__PURE__ */ react.createElement(Tab, {
    className: modalStyles.text,
    label: "\u0412\u0445\u043E\u0434"
  }))), /* @__PURE__ */ react.createElement("div", null, tabAuth == 0 ? /* @__PURE__ */ react.createElement(Registration, null) : /* @__PURE__ */ react.createElement(Login, {
    errorLogin
  })))))));
};
const Header = () => {
  const isModal = useSelector((state) => state.AppReducer.isModal);
  const {isAuth, tokenUser, errorLogin} = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(ModalAuth, {
    errorLogin,
    setOpen: (isModal2) => dispatch(setModalAction(isModal2)),
    isModal
  }), /* @__PURE__ */ react.createElement(AppBar, {
    position: "sticky",
    style: {background: colorTheme.lightGreen}
  }, /* @__PURE__ */ react.createElement(Toolbar, {
    style: {display: "flex", justifyContent: "space-around", gap: "20px"}
  }, /* @__PURE__ */ react.createElement(FRlink, {
    href: "/"
  }, /* @__PURE__ */ react.createElement(Typography, {
    variant: "h4",
    style: {fontFamily: "Segoe Print"}
  }, "Myocean Math")), !isAuth ? /* @__PURE__ */ react.createElement(FRbutton, {
    color: "root",
    onClick: () => dispatch(setModalAction(true))
  }, "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F") : /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(FRlink, {
    href: "/level"
  }, /* @__PURE__ */ react.createElement(FRbutton, null, "\u041F\u0440\u0438\u0441\u0442\u0443\u043F\u0438\u0442\u044C \u043A \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044E")), /* @__PURE__ */ react.createElement(FRlink, {
    href: "/profile/" + tokenUser.id
  }, /* @__PURE__ */ react.createElement(FRbutton, {
    color: "root"
  }, "\u041F\u0440\u043E\u0444\u0438\u043B\u044C"))))));
};
const NotFound = () => {
  return /* @__PURE__ */ react.createElement(Alert, {
    style: {marginTop: "50px"},
    severity: "error"
  }, "\u0422\u0430\u043A\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 !");
};
const home = "_home_1c17m_1";
const home__wrapper = "_home__wrapper_1c17m_6";
const home__main = "_home__main_1c17m_9";
const home__content = "_home__content_1c17m_12";
const home__auth = "_home__auth_1c17m_19";
const home__right = "_home__right_1c17m_37";
const home__block__left = "_home__block__left_1c17m_42";
const home__block__center = "_home__block__center_1c17m_57";
const home__block__right = "_home__block__right_1c17m_82";
var styles$1 = {
  home,
  home__wrapper,
  home__main,
  home__content,
  home__auth,
  home__right,
  home__block__left,
  home__block__center,
  home__block__right
};
var screen = "/assets/screen.84c02f13.png";
const HomePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLoader, setLoader] = react.useState(false);
  react.useEffect(() => {
    setLoader(true);
    AuthAPI.checkauth().then((res) => {
      if (res.isAuth)
        history.push("/profile/" + res.id);
      setLoader(false);
    });
  }, []);
  return /* @__PURE__ */ react.createElement(react.Fragment, null, !isLoader ? /* @__PURE__ */ react.createElement("div", {
    className: styles$1.home__wrapper
  }, /* @__PURE__ */ react.createElement("div", {
    className: styles$1.home
  }, /* @__PURE__ */ react.createElement("div", {
    className: styles$1.home__main
  }, /* @__PURE__ */ react.createElement("div", {
    className: styles$1.home__block__left
  }), /* @__PURE__ */ react.createElement("div", {
    className: styles$1.home__block__center
  }, /* @__PURE__ */ react.createElement("h1", {
    className: styles$1.home__title
  }, "\u0420\u0435\u0448\u0430\u0439\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u043F\u043E \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430 \u0432 \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u043E\u043C \u0444\u043E\u0440\u043C\u0430\u0442\u0435 !"), /* @__PURE__ */ react.createElement("div", {
    className: styles$1.home__content
  }, /* @__PURE__ */ react.createElement("img", {
    src: screen,
    alt: ""
  }), /* @__PURE__ */ react.createElement("div", {
    className: styles$1.home__right
  }, /* @__PURE__ */ react.createElement("p", null, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur explicabo magnam numquam illum accusamus deleniti nesciunt? Reiciendis dolore porro sunt, autem odit aliquid maiores cum voluptas repellat aperiam error ratione quisquam facere consequatur nulla totam. Cumque, tenetur, quo delectus dolor aspernatur iste quas dicta dignissimos blanditiis suscipit commodi! Reprehenderit quisquam temporibus distinctio veniam! Illum itaque est maxime vero ullam. Perferendis repellendus ullam, quidem odio veniam incidunt sunt nesciunt? Adipisci, nam. Aliquam perspiciatis maxime enim modi omnis voluptatibus id, illo suscipit?"), /* @__PURE__ */ react.createElement(Alert, {
    variant: "filled",
    color: "warning"
  }, "\u0414\u0430\u043D\u043D\u044B\u0439 \u0441\u0430\u0439\u0442 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435 !"), /* @__PURE__ */ react.createElement("button", {
    onClick: () => dispatch(setModalAction(true)),
    className: styles$1.home__auth
  }, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F")))), /* @__PURE__ */ react.createElement("div", {
    className: styles$1.home__block__right
  })))) : "");
};
const frlevel__wrapper = "_frlevel__wrapper_2q53i_1";
const frlevel__left = "_frlevel__left_2q53i_12";
const frlevel__canvas = "_frlevel__canvas_2q53i_16";
const frlevel__fone = "_frlevel__fone_2q53i_23";
const frlevel__interface = "_frlevel__interface_2q53i_35";
const frlevel__stats = "_frlevel__stats_2q53i_41";
const frlevel__content = "_frlevel__content_2q53i_46";
const frlevel__actions = "_frlevel__actions_2q53i_54";
const frlevel__field = "_frlevel__field_2q53i_61";
const frlevel__inner = "_frlevel__inner_2q53i_74";
const frlevel__right = "_frlevel__right_2q53i_79";
var styles = {
  frlevel__wrapper,
  frlevel__left,
  frlevel__canvas,
  frlevel__fone,
  frlevel__interface,
  frlevel__stats,
  frlevel__content,
  frlevel__actions,
  frlevel__field,
  frlevel__inner,
  frlevel__right
};
var fone = "/assets/fonegame.d6a5f2fe.jpg";
const fr_stylesText = makeStyles({
  tasks: {
    fontFamily: "Verdana",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "20px",
    color: "#000",
    fontStyle: "italic"
  },
  title: {
    fontFamily: "GTrones",
    fontSize: "24px",
    lineHeight: "20px",
    letterSpacing: "1px",
    textAlign: "center",
    marginTop: "50px"
  },
  alert: {
    fontSize: "24px",
    marginTop: "30px",
    textAlign: "center"
  }
});
const fr_stylesInput = makeStyles({
  tasks: {
    maxWidth: "400px",
    margin: "30px 0"
  }
});
class User {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = canvasWidth - 200;
    this.y = canvasHeight - 200;
    this.img = "/src/assets/player.png";
    this.width = 86;
    this.height = 156;
    this.user = new Image();
    this.user.src = this.img;
  }
  draw(ctx) {
    ctx.drawImage(this.user, this.x, this.y, this.width, this.height);
  }
  clear(ctx) {
    ctx.clearRect(this.x, this.y, this.x + this.width, this.y + this.height);
  }
  moveController(level) {
    switch (level) {
      case 1:
        this.moveFirst();
        break;
      case 2:
        this.moveSecond();
        break;
      case 3:
        this.moveThird();
        break;
      case 4:
        this.moveFourth();
        break;
      default:
        this.moveNull();
        break;
    }
  }
  moveNull() {
    this.x -= 190;
    this.y -= 100;
  }
  moveFirst() {
    this.x -= 40;
    this.y -= 120;
  }
  moveSecond() {
    this.y -= 120;
    this.x += 220;
  }
  moveThird() {
    this.y -= 240;
    this.x += 50;
  }
  moveFourth() {
    this.x -= 100;
    this.y -= 30;
    this.width = 48;
    this.height = 100;
  }
}
const createCanvas = (canvas, level) => {
  let ctx = canvas.current.getContext("2d");
  ctx.mozImageSmoothingEnabled = false;
  ctx.webkitImageSmoothingEnabled = false;
  ctx.msImageSmoothingEnabled = false;
  ctx.imageSmoothingEnabled = false;
  let canvasWidth = canvas.current.getBoundingClientRect().width;
  let canvasHeight = canvas.current.getBoundingClientRect().height;
  let arrPositions = [
    {x: canvasWidth - 250, y: canvasHeight - 320},
    {x: canvasWidth - 400, y: canvasHeight - 450},
    {x: canvasWidth - 80, y: canvasHeight - 500},
    {x: canvasWidth - 220, y: canvasHeight - 730},
    {x: canvasWidth - 370, y: canvasHeight - 770}
  ];
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  let user = new User(canvasWidth, canvasHeight);
  for (let i = 0; i < level; i++) {
    let flag = new Image();
    if (i + 1 == level)
      flag.src = "/src/assets/flagfull.png";
    else
      flag.src = "/src/assets/flagwin.png";
    ctx.drawImage(flag, arrPositions[i].x, arrPositions[i].y, 86, 86);
    user.clear(ctx);
    user.moveController(i);
    user.draw(ctx);
  }
};
const getTasksAction = (tasksList) => ({type: LevelEnums.GET_TASKS, payload: tasksList});
const setLevelAction = (level) => ({type: LevelEnums.SET_LEVEL, payload: level});
const setCurrentTaskAction = (level) => ({type: LevelEnums.SET_CURRENT_TASK, payload: level});
const setFinishAction = (isFinished) => ({type: LevelEnums.SET_FINISHED, payload: isFinished});
const clearTasksAction = () => ({type: LevelEnums.CLEAR_TASKS});
const setErrorAction = (isError) => ({type: LevelEnums.SET_ERROR, payload: isError});
const getErrorsAction = (errors) => ({type: LevelEnums.GET_ERRORS, payload: errors});
const LevelForm = ({answers, truthy, sendAnswer}) => {
  const [formData, setForm] = react.useState([]);
  const updateForm = () => setForm([...answers, truthy].sort(() => Math.random() - 0.5));
  react.useEffect(() => {
    updateForm();
  }, []);
  react.useEffect(() => {
    updateForm();
  }, [truthy]);
  return /* @__PURE__ */ react.createElement(FormControl, {
    component: "fieldset"
  }, /* @__PURE__ */ react.createElement(FormLabel, {
    component: "legend"
  }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u043E\u0442\u0432\u0435\u0442\u0430:"), /* @__PURE__ */ react.createElement(RadioGroup, {
    onChange: (event) => sendAnswer(event.target.value)
  }, formData.map((item, index2) => {
    return /* @__PURE__ */ react.createElement(FormControlLabel, {
      value: item,
      key: item,
      control: /* @__PURE__ */ react.createElement(Radio, {
        color: "primary"
      }),
      label: item
    });
  })));
};
const LevelAPI = {
  getTasks: async () => {
    try {
      let res = await axios.get("https://myoceanmathserver.herokuapp.com/tasks/level");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
  saveTasks: async (tasksList, userID) => {
    try {
      let res = await axios.put("https://myoceanmathserver.herokuapp.com/users/save", {tasksList, userID: userID.id});
    } catch (error) {
      console.log(error);
    }
  }
};
let stateDefault$1 = {
  tasksList: [],
  currentTask: null,
  currentLevel: 1,
  isFinished: false,
  isError: false,
  errorsList: 0
};
const LevelReducer = (state = stateDefault$1, action) => {
  switch (action.type) {
    case LevelEnums.GET_TASKS: {
      return __assign(__assign({}, state), {tasksList: action.payload});
    }
    case LevelEnums.SET_LEVEL: {
      return __assign(__assign({}, state), {currentLevel: action.payload});
    }
    case LevelEnums.SET_CURRENT_TASK: {
      return __assign(__assign({}, state), {currentTask: action.payload});
    }
    case LevelEnums.SET_FINISHED: {
      return __assign(__assign({}, state), {isFinished: action.payload});
    }
    case LevelEnums.CLEAR_TASKS: {
      return __assign(__assign({}, state), {isFinished: false, currentTask: 1, tasksList: []});
    }
    case LevelEnums.SET_ERROR: {
      return __assign(__assign({}, state), {isError: action.payload});
    }
    case LevelEnums.GET_ERRORS: {
      return __assign(__assign({}, state), {errorsList: action.payload});
    }
    default:
      return __assign({}, state);
  }
};
const getTasksThunk = () => async (dispatch) => {
  let sessionTasks = window.sessionStorage.getItem("tasks");
  let level = window.sessionStorage.getItem("level");
  let errors = window.sessionStorage.getItem("mistakes");
  let isFinished = window.sessionStorage.getItem("isFinished");
  if (JSON.parse(isFinished)) {
    dispatch(setFinishAction(true));
    if (level != null)
      dispatch(setLevelAction(JSON.parse(level)));
    if (errors != null)
      dispatch(getErrorsAction(JSON.parse(errors)));
  }
  if (sessionTasks == null) {
    let data = await LevelAPI.getTasks();
    dispatch(getTasksAction(data));
    dispatch(setCurrentTaskAction(data[0]));
    window.sessionStorage.setItem("tasks", JSON.stringify(data));
    window.sessionStorage.setItem("level", JSON.stringify(1));
  } else {
    dispatch(getTasksAction(JSON.parse(sessionTasks)));
    dispatch(setCurrentTaskAction(JSON.parse(sessionTasks)[JSON.parse(level - 1)]));
    dispatch(setLevelAction(JSON.parse(level)));
  }
};
const setAnswerThunk = (answer, truthy, level, userID) => async (dispatch) => {
  if (answer == truthy) {
    let tasks = sessionStorage.getItem("tasks");
    dispatch(setErrorAction(false));
    if (JSON.parse(tasks)[level] != null) {
      sessionStorage.setItem("level", String(level + 1));
      dispatch(setCurrentTaskAction(JSON.parse(tasks)[level]));
      dispatch(setLevelAction(level + 1));
    } else {
      let errors = window.sessionStorage.getItem("mistakes");
      if (errors != null)
        dispatch(getErrorsAction(JSON.parse(errors)));
      sessionStorage.setItem("isFinished", JSON.stringify(true));
      dispatch(setFinishAction(true));
      await LevelAPI.saveTasks(JSON.parse(tasks), userID);
    }
  } else {
    let mistakes = sessionStorage.getItem("mistakes");
    if (mistakes != null)
      sessionStorage.setItem("mistakes", String(parseInt(mistakes) + 1));
    else
      sessionStorage.setItem("mistakes", String(1));
    dispatch(setErrorAction(true));
  }
};
const LevelFinish = () => {
  const textStyles = fr_stylesText();
  const errorsList = useSelector((state) => state.LevelReducer.errorsList);
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(Typography, {
    className: textStyles.title,
    variant: "h3"
  }, "\u0412\u044B \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043B\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0432\u0441\u0435\u0445 \u0437\u0430\u0434\u0430\u043D\u0438\u0439 !"), errorsList > 0 ? /* @__PURE__ */ react.createElement(Alert, {
    icon: false,
    className: textStyles.alert,
    variant: "filled",
    color: "error"
  }, "\u0412\u044B \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043B\u0438 \u043E\u0448\u0438\u0431\u043E\u043A: ", errorsList) : /* @__PURE__ */ react.createElement(Alert, {
    icon: false,
    className: textStyles.alert,
    variant: "filled",
    color: "success"
  }, "\u0412\u044B \u043D\u0435 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043B\u0438 \u043E\u0448\u0438\u0431\u043E\u043A !"));
};
const Level = ({tasksList, currentLevel, isLoader, currentTask, isFinished, userID, isError}) => {
  const canvas = react.useRef(null);
  const inputField = react.useRef(null);
  const [isModal, setModalImage] = react.useState(false);
  const [answer, setAnswer] = react.useState(null);
  const textStyles = fr_stylesText();
  fr_stylesInput();
  const modalStyles = fr_stylesModal();
  const dispatch = useDispatch();
  let history = useHistory();
  react.useEffect(() => {
    let isAnimation = null;
    const render = () => {
      createCanvas(canvas, currentLevel);
      isAnimation = window.requestAnimationFrame(render);
    };
    render();
    return () => window.cancelAnimationFrame(isAnimation);
  }, []);
  react.useEffect(() => {
    let isAnimation = null;
    const render = () => {
      createCanvas(canvas, currentLevel);
      isAnimation = window.requestAnimationFrame(render);
    };
    render();
    return () => window.cancelAnimationFrame(isAnimation);
  }, [currentLevel]);
  react.useEffect(() => {
    if (!isLoader)
      window.scrollTo({behavior: "smooth", top: 600});
  }, [isLoader]);
  react.useEffect(() => {
    console.log(inputField.current);
    setAnswer(null);
  }, [currentLevel]);
  const sendAnswer = (answer2) => dispatch(setAnswerThunk(answer2, currentTask.answer, currentLevel, userID));
  const sendInputData = (value) => setAnswer(value);
  const clearTask = () => {
    window.sessionStorage.clear();
    dispatch(clearTasksAction());
    history.push("/profile/" + userID.id);
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Modal, {
    "aria-labelledby": "transition-modal-title",
    "aria-describedby": "transition-modal-description",
    open: isModal,
    onClose: () => setModalImage(false),
    closeAfterTransition: true,
    BackdropComponent: Backdrop,
    BackdropProps: {timeout: 500},
    className: modalStyles.modal
  }, /* @__PURE__ */ react.createElement(Fade, {
    in: isModal
  }, /* @__PURE__ */ react.createElement(Card, {
    className: modalStyles.cardImageBackground
  }, /* @__PURE__ */ react.createElement(CardContent, null, /* @__PURE__ */ react.createElement("img", {
    className: modalStyles.cardImage,
    src: "https://myoceanmathserver.herokuapp.com/files/" + currentTask.src,
    alt: ""
  }))))), /* @__PURE__ */ react.createElement("div", {
    className: styles.frlevel__wrapper
  }, /* @__PURE__ */ react.createElement("div", {
    className: styles.frlevel__left
  }, /* @__PURE__ */ react.createElement("canvas", {
    width: "450",
    height: "800",
    className: styles.frlevel__canvas,
    id: "level-canvas",
    resize: "true",
    ref: canvas
  }), /* @__PURE__ */ react.createElement("img", {
    className: styles.frlevel__fone,
    src: fone
  })), /* @__PURE__ */ react.createElement("div", {
    className: styles.frlevel__interface
  }, /* @__PURE__ */ react.createElement(Card, {
    className: styles.frlevel__stats
  }, /* @__PURE__ */ react.createElement(CardContent, {
    className: styles.frlevel__content
  }, /* @__PURE__ */ react.createElement("h1", null, "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430"), !isFinished ? /* @__PURE__ */ react.createElement("div", {
    className: styles.frlevel__inner
  }, /* @__PURE__ */ react.createElement("div", {
    className: styles.frlevel__field
  }, /* @__PURE__ */ react.createElement(Typography, {
    style: {paddingLeft: "50px", paddingTop: "70px"},
    variant: "h4"
  }, currentTask.title), /* @__PURE__ */ react.createElement("p", {
    style: {paddingLeft: "50px"},
    className: textStyles.tasks
  }, currentTask.text), /* @__PURE__ */ react.createElement("img", {
    onDoubleClick: () => setModalImage(true),
    src: "https://myoceanmathserver.herokuapp.com/files/" + currentTask.src,
    alt: ""
  }), /* @__PURE__ */ react.createElement("p", {
    style: {fontSize: "14px", marginLeft: "50px", cursor: "pointer", textDecoration: "underline"},
    onClick: () => setModalImage(true)
  }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u043F\u043E\u043B\u043D\u043E\u043C \u0440\u0430\u0437\u043C\u0435\u0440\u0435")), /* @__PURE__ */ react.createElement("div", {
    className: styles.frlevel__right
  }, (currentTask == null ? void 0 : currentTask.otherSrc) != null ? /* @__PURE__ */ react.createElement("img", {
    src: "https://myoceanmathserver.herokuapp.com/files/" + currentTask.otherSrc
  }) : "", currentTask.others.length == 0 ? /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(TextField, {
    style: {margin: "20px 0"},
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0442\u0432\u0435\u0442",
    helperText: "\u041E\u0442\u0432\u0435\u0442 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0447\u0438\u0441\u043B\u043E\u043C",
    fullWidth: true,
    onChange: (event) => sendInputData(event.target.value)
  }), /* @__PURE__ */ react.createElement(FRbutton, {
    onClick: () => sendAnswer(answer)
  }, "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C")) : /* @__PURE__ */ react.createElement(LevelForm, {
    sendAnswer,
    answers: currentTask.others,
    truthy: currentTask.answer
  }), isError ? /* @__PURE__ */ react.createElement(Alert, {
    style: {margin: "20px 0"},
    color: "error",
    variant: "filled"
  }, "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 !") : "")) : /* @__PURE__ */ react.createElement(LevelFinish, null)), /* @__PURE__ */ react.createElement(CardActions, {
    className: styles.frlevel__actions
  }, /* @__PURE__ */ react.createElement(FRbutton, {
    onClick: clearTask
  }, "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C"))))));
};
const LevelPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {tasksList, currentLevel, currentTask, isFinished, isError} = useSelector((state) => state.LevelReducer);
  const userID = useSelector((state) => state.AuthReducer.tokenUser);
  const {isLoader} = useSelector((state) => state.AuthReducer);
  react.useEffect(() => {
    AuthAPI.checkauth().then((res) => {
      if (!res.isAuth)
        history.push("/");
    });
    dispatch(getTasksThunk());
  }, []);
  if (tasksList.length > 0 && currentTask != null)
    return /* @__PURE__ */ react.createElement(Level, {
      isLoader,
      tasksList,
      currentTask,
      currentLevel,
      isFinished,
      userID,
      isError
    });
  else
    return /* @__PURE__ */ react.createElement("div", null, "loading....");
};
const FinishedTask = ({item}) => {
  return /* @__PURE__ */ react.createElement(Card, {
    style: {marginBottom: "50px", maxWidth: "700px"}
  }, /* @__PURE__ */ react.createElement(CardContent, {
    style: {display: "flex", justifyContent: "space-around", alignItems: "center"}
  }, /* @__PURE__ */ react.createElement(Typography, {
    variant: "h4"
  }, item.title), /* @__PURE__ */ react.createElement("img", {
    src: "https://myoceanmathserver.herokuapp.com/files/" + item.src,
    style: {maxWidth: "300px", objectFit: "cover"}
  }), /* @__PURE__ */ react.createElement(Alert, {
    variant: "filled"
  }, "\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442: ", item.answer)), /* @__PURE__ */ react.createElement(CardActions, null));
};
const Profile = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const {user, isLoader, isNotUser, tasksList, isLoaderTasks} = useSelector((state) => state.AuthReducer);
  react.useEffect(() => {
    dispatch(setFullData(params.id));
  }, []);
  const logoutUser = () => {
    dispatch(logout());
    history.push("/");
  };
  if (!isLoader && !isNotUser)
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", {
      style: {display: "flex", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap"}
    }, /* @__PURE__ */ react.createElement(Card, {
      style: {width: "400px", margin: "50px", textAlign: "center"}
    }, /* @__PURE__ */ react.createElement(CardContent, null, /* @__PURE__ */ react.createElement(Typography, {
      variant: "h3"
    }, user == null ? void 0 : user.login), /* @__PURE__ */ react.createElement(Typography, {
      variant: "h6"
    }, user == null ? void 0 : user.email)), /* @__PURE__ */ react.createElement(CardActions, null, /* @__PURE__ */ react.createElement(FRbutton, {
      onClick: logoutUser
    }, "\u0412\u044B\u0439\u0442\u0438"))), /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(Typography, {
      style: {marginBottom: "20px"},
      variant: "h3"
    }, "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E \u0437\u0430\u0434\u0430\u043D\u0438\u0439: ", user == null ? void 0 : user.tasks.length), /* @__PURE__ */ react.createElement(FRlink, {
      href: "/level"
    }, /* @__PURE__ */ react.createElement(FRbutton, null, "\u041F\u0440\u0438\u0441\u0442\u0443\u043F\u0438\u0442\u044C \u043A \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044E")))), !isLoaderTasks ? /* @__PURE__ */ react.createElement("div", {
      style: {display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px"}
    }, tasksList != null && (tasksList == null ? void 0 : tasksList.length) > 0 ? tasksList.map((item, index2) => {
      return /* @__PURE__ */ react.createElement(FinishedTask, {
        key: index2,
        item
      });
    }) : "") : /* @__PURE__ */ react.createElement(CircularProgress, {
      style: {marginLeft: "50px"}
    }));
  if (isNotUser && !isLoader)
    return /* @__PURE__ */ react.createElement(Alert, {
      style: {marginTop: "50px"},
      severity: "error"
    }, "\u0422\u0430\u043A\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 !");
  if (isLoader)
    return /* @__PURE__ */ react.createElement(CircularProgress, null);
};
const ProfilePage = () => {
  const dispatch = useDispatch();
  react.useEffect(() => {
    AuthAPI.checkauth().then((res) => {
      if (res.isAuth) {
        dispatch(setUserTokenAction({email: res.email, id: res.id}));
        dispatch(getFinishedTasksThunk(res.id));
      }
      dispatch(setAuthAction(res.isAuth));
    });
  }, []);
  return /* @__PURE__ */ react.createElement(Profile, null);
};
function App() {
  const dispatch = useDispatch();
  const {isLoader} = useSelector((state) => state.AuthReducer);
  react.useEffect(() => {
    AuthAPI.checkauth().then((res) => {
      if (res.isAuth)
        dispatch(setUserTokenAction({email: res.email, id: res.id}));
      dispatch(setAuthAction(res.isAuth));
    });
  }, []);
  return /* @__PURE__ */ react.createElement(BrowserRouter, null, !isLoader ? /* @__PURE__ */ react.createElement(Header, null) : "", /* @__PURE__ */ react.createElement(Switch, null, /* @__PURE__ */ react.createElement(Route, {
    exact: true,
    path: "/"
  }, /* @__PURE__ */ react.createElement(HomePage, null)), /* @__PURE__ */ react.createElement(Route, {
    path: "/profile/:id"
  }, /* @__PURE__ */ react.createElement(ProfilePage, null)), /* @__PURE__ */ react.createElement(Route, {
    path: "/level"
  }, /* @__PURE__ */ react.createElement(LevelPage, null)), /* @__PURE__ */ react.createElement(Route, {
    path: "*"
  }, /* @__PURE__ */ react.createElement(NotFound, null))));
}
let stateDefault = {
  isModal: false
};
const AppReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case AppEnums.SET_MODAL: {
      return __assign(__assign({}, state), {isModal: action.payload});
    }
    default:
      return __assign({}, state);
  }
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let rootReducer = combineReducers({AuthReducer, AppReducer, LevelReducer});
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
var _normalize = "";
var index = 'body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncanvas {\n  width: 100%;\n  height: 100%;\n}';
var settings = '@font-face {\n  font-family: "GTRones";\n  src: url("__VITE_ASSET__106bbcb6__") format("truetype");\n}\n@font-face {\n  font-family: "Segoe Print";\n  src: url("__VITE_ASSET__4061e7eb__") format("truetype");\n}';
reactDom.render(/* @__PURE__ */ react.createElement(Provider, {
  store
}, /* @__PURE__ */ react.createElement(App, null)), document.getElementById("root"));
