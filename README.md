# Getting Started with Create React App
## useContext : 좀 햇갈림(사용 순서)
### case 1.
+ Context 객체를 생성
 > const SomeContext = createContext(null)
+ 생성한 context를 Provider를 통해 사용할 값을 생성
 > const [value, setValue] = useState(defaultValue)  
 > <SomeContext.Provider value={{value}} > <대상 react 객체/> </>
 + 이렇게 하면 대상이 되는 react 객체에서 context 값을 사용 가능
> const useContextValue = useContext(SomeContext)
> 
> useContextValue를 원하는 용도에 맞게 사용
### case 2.
+ Context 객체를 생성하고 사용 할 수 있게 useContext 값을 전달...
 ```
const SomeContext = createContext(null)
function Provider() {
   const [value, setValue] = useState(defaultValue)
   <SomeContext.Provider value={{value}} > {children} 
   </SomeContext.Provider>
 }
 export useContextValue = () => useContext(SomeContext)
``` 
+ 사용은..
 > <Provider><children 객체 /></Provider>
> 
## router 사용하기 : 최신 버젼 보다 이전게 사용하기 편함
* 최신 버젼은 초기 페이지 지정 및 nav 고정이 좀 어려움(???)
* npm install react-router-dom localforage match-sorter sort-by
* index.js
```
  <BrowserRouter>
    <NavApp />
    //<RouterProvider router={router} />
  </BrowserRouter>
```
* navApp.js
```
<div>
  <nav className='nav bg-dark'>
    <Link to="/" className="nav-item text-white p-2">Home</Link>
    <Link to="/about-me" className="nav-item text-white p-2">About Me</Link>
  </nav>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/about-me" element={<AboutMe/>}/>
  </Routes>
</div>
```
