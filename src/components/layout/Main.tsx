
const Main = (props: any) => {
    return (
        <div className="flex items-center justify-center flex-col bg-indigo-200">
            {props.children}
        </div>
    )
}

export default Main;