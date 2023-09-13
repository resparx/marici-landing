import Accordion from "../common/accordion"

const FAQ = () => {
    const accordionItems = [
        {
            heading: 'Elit nostrud proident ullamco',
            content: <p>Ex occaecat reprehenderit non laborum commodo occaecat laborum do commodo excepteur aliqua aliqua.Aute labore do veniam ea qui fugiat amet id in fugiat.Consequat aliqua elit eiusmod tempor in id pariatur nulla duis elit.</p>
        },
        {
            heading: 'Elit nostrud proident ullamco',
            content: <p>Ex occaecat reprehenderit non laborum commodo occaecat laborum do commodo excepteur aliqua aliqua.Aute labore do veniam ea qui fugiat amet id in fugiat.Consequat aliqua elit eiusmod tempor in id pariatur nulla duis elit.</p>
        },
        {
            heading: 'Elit nostrud proident ullamco',
            content: <p>Ex occaecat reprehenderit non laborum commodo occaecat laborum do commodo excepteur aliqua aliqua.Aute labore do veniam ea qui fugiat amet id in fugiat.Consequat aliqua elit eiusmod tempor in id pariatur nulla duis elit.</p>
        },
        {
            heading: 'Elit nostrud proident ullamco',
            content: <p>Ex occaecat reprehenderit non laborum commodo occaecat laborum do commodo excepteur aliqua aliqua.Aute labore do veniam ea qui fugiat amet id in fugiat.Consequat aliqua elit eiusmod tempor in id pariatur nulla duis elit.</p>
        }
    ]
    return <div className="flex px-48 justify-between mt-16">
        <p className=" w-[30%] text-7xl text-gray-800 font-semibold">
            Frequently asked questions
        </p>
        <div className="flex flex-col w-1/2">
            <p className="text-lg font-semibold text-gray-800" >
                Magna nisi culpa ex est.
            </p>
            <p className="text-base font-normal text-gray-800" >
                Tempor veniam quis duis ullamco sunt qui enim enim non commodo.Tempor veniam quis duis ullamco sunt qui enim enim non commodo.Tempor veniam quis duis ullamco sunt qui enim enim non commodo.
            </p>
            <Accordion items={accordionItems} />
        </div>
    </div>
}

export default FAQ