import { Link } from "react-router-dom";

const Header2 = () => {

    const List = [
        {
            name:"Banglore",
            id:"1",
        },
        {
            name:"Delhi",
            id:'2',
        },
        {
            name:"Pune",
            id:'3',
        },
        {
            name:"Noida",
            id:'4',
        },
        {
            name:"Hyderabad",
            id:'5',
        },
        {
            name:"Pune",
            id:'6',
        },
        {
            name:"Noida",
            id:'7',
        },
        {
            name:"Delhi",
            id:'8',
        },
    ]


  return (
    <div>
            <div className="flex h-10 px-10 py-3 bg-gray-100 justify-between items-center">
                {
                    List.map((e) => {
                        return (
                             <Link to="/Filltersidebar">
                            <div className="grid grid-cols-2 items-center" key={e.id}> 
                                <span key={e.id}>{e.name}</span>
                               
                                    <h3 className="flex items-center"> 
                                    <span>
                                        <svg className="mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </h3>
                               
                            </div> </Link>
                        )
                    })
                }
                <div>
                    <h2>All Cities</h2>
                </div>
            </div>



    </div>
  )
}

export default Header2;