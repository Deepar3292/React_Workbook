const { screen, render, fireEvent } = require("@testing-library/react");
const { default: CustomerRow } = require("./CustomerRow");

describe("testing customer row app", () => {

    let c = {
        id: 123,
        firstName: 'Jack',
        lastName: 'Sparrow'
    }
    let callback = jest.fn();
    it("render customer row", () => {
        render(<CustomerRow customer={c} key={c.id} 
            delEvent={(id) => callback(id)} />);
        let elem = screen.getByText(/Jack/i);
        screen.debug();
        expect(elem).toBeInTheDocument();
    })

    it("delete event customer row", () => {
        render(<CustomerRow customer={c} key={c.id} 
            delEvent={(id) => callback(id)} />);
        let btn = screen.getByRole('button');
        fireEvent.click(btn);
        expect(callback).toBeCalledTimes(1);
        expect(callback).toBeCalledWith(123);
    })
})