export default function JobSearch() {
    return (
        <>
            <div className="bg-search flex md:flex-row flex-col text-white p-10 items-center justify-between ">
                <div className="flex-col space-y-2">
                    <div><p>Search by Keyword</p></div>
                    <div><input type="text" placeholder="Search by Keyword" className="rounded-lg border border-black h-12 p-2 w-80" /></div>
                </div>

                <div className="flex-col space-y-2">
                    <div><p>Location</p></div>
                    <div><input type="text" placeholder="Location" className="rounded-lg border border-black h-12 p-2 w-80" /></div>
                </div>

                <div className="flex-col space-y-2">
                    <div><p>Search radius</p></div>
                    <div><select name="radius" id="radius" className="rounded-lg border border-black h-12 p-2 text-black w-80">
                    <option value="select">Select miles</option>
                        <option value="5">5 miles</option>
                        <option value="15">15 miles</option>
                        <option value="25">25 miles</option>
                        <option value="35">35 miles</option>
                    </select></div>
                </div>
                <div className="flex-col space-y-2">
                    <div className="text-search">buttiom</div>
                    <button className="bg-search text-white p-2 border border-white rounded-lg w-44 hover:bg-white hover:text-search">Search jobs</button>
                </div>

            </div>
        </>
    )
}