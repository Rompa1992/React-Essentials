export default function TabButton({ children, onSelect }) {
    return (
    <li>    
        <button onClick={onSelect}>{children}</button> {/* The children prop is used to access the content between the opening and closing tags of the component. */}
    </li>
    ); 
}