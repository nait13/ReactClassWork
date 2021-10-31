import './SomeButton.css';

export const SomeButton = ({className}) => {
    return (<div>
            <button className={className + ' some-button'}>IM SOMEBUTTON!</button>
        </div>)
}