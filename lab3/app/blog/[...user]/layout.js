export default function blogLayout ({children}) {
    return(
        <layout>
            <div>Blog Menu</div>
            <div>{children}</div>
        </layout>
    );
}