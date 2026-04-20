function EventExamples() {

    const handleClick = () => {
        console.log('Button clicked!');
    };

    const handleInput = (event) => {
        console.log('Input value:', event.target.value);
    };

    const handleItemClick = (itemId) => {
        console.log('Item clicked:', itemId);
    };

    return (
        <div>

            <h2>Event Examples</h2>

            <button onClick={handleClick}>
                Click Me
            </button>

            <br /><br />

            <input onChange={handleInput} placeholder="Type something" />

            <br /><br />

            <button onClick={() => handleItemClick(123)}>
                Item 123
            </button>

            <br /><br />

            <form onSubmit={(e) => {
                e.preventDefault();
                console.log('Form submitted');
            }}>
                <button type="submit">Submit</button>
            </form>

        </div>
    );
}

export default EventExamples;