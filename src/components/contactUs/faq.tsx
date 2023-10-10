import Accordion from "../common/accordion"

const FAQ = () => {
    const accordionItems = [
        {
            title: 'Elit nostrud proident ullamco',
            content: 'Ex occaecat reprehenderit non laborum commodo occaecat laborum do commodo excepteur aliqua aliqua.Aute labore do veniam ea qui fugiat amet id in fugiat.Consequat aliqua elit eiusmod tempor in id pariatur nulla duis elit.'
        },
        {
            title: 'Elit nostrud proident ullamco',
            content: 'Ex occaecat reprehenderit non laborum commodo occaecat laborum do commodo excepteur aliqua aliqua.Aute labore do veniam ea qui fugiat amet id in fugiat.Consequat aliqua elit eiusmod tempor in id pariatur nulla duis elit.'
        },
        {
            title: 'Elit nostrud proident ullamco',
            content: 'Ex occaecat reprehenderit non laborum commodo occaecat laborum do commodo excepteur aliqua aliqua.Aute labore do veniam ea qui fugiat amet id in fugiat.Consequat aliqua elit eiusmod tempor in id pariatur nulla duis elit.'
        },
        {
            title: 'Elit nostrud proident ullamco',
            content: 'Ex occaecat reprehenderit non laborum commodo occaecat laborum do commodo excepteur aliqua aliqua.Aute labore do veniam ea qui fugiat amet id in fugiat.Consequat aliqua elit eiusmod tempor in id pariatur nulla duis elit.'
        }
    ]
    return <div className="flex flex-col sm:flex-row px-4 sm:px-48 justify-between my-16">
        <p className="w-full sm:w-[30%] text-3xl sm:text-7xl mb-16 sm:mb-0 text-gray-800 font-semibold">
            Frequently asked questions
        </p>
        <div className="flex flex-col w-full sm:w-1/2">
            <p className="text-lg sm:text-3xl mb-3 font-semibold text-gray-800" >
                Magna nisi culpa ex est.
            </p>
            <p className="text-lg font-normal text-gray-800 mb-6" >
                Tempor veniam quis duis ullamco sunt qui enim enim non commodo.Tempor veniam quis duis ullamco sunt qui enim enim non commodo.Tempor veniam quis duis ullamco sunt qui enim enim non commodo.
            </p>
            <div className="flex flex-col">
                {accordionItems.map((item, index: number) => {
                    return <Accordion key={`accordian-${index}`} {...item} />
                })}
            </div>
        </div>
    </div>
}

export default FAQ