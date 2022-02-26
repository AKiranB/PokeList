
const Main = (props: any) => {
    return (
        <div className="flex items-start min-h-screen items-center flex-col bg-indigo-100">
            {props.children}
        </div>
    )
}

export default Main;