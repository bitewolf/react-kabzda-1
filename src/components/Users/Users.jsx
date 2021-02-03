import React from 'react'
import styles from './users.module.css'
import userPhoto from '../../assets/images/user.png'

let Users = (props) => {


//   let salariesCompany = {
//         Ivan: 1200,
//         Irina: 800,
//         Alex: 1050,
//         Anton: 1460,
//         Egor: 100
//       }
    
//     let averageSalary = 0
//     let summSalary = 0
//     let hasMaxSalary = ''
//     let MaxSalary = 0
//     let hasMinSalary = ''
//     let MinSalary = Number.MAX_SAFE_INTEGER
//     let i = 0

//     let report = {
//         averageSalary: 0,
//         hasMaxSalary: '',
//         hasMinSalary: ''
//       }

      
//     function getSalaryReport(salaries) {
//         for (let key in salaries) {
//             i++
//             summSalary = summSalary + salaries[key]
//             averageSalary = summSalary/i
            
//             if (salaries[key] >= MaxSalary) {
//                 MaxSalary = salaries[key]
//                 hasMaxSalary = key
//             }
//             if (salaries[key] <= MinSalary) {
//                 MinSalary = salaries[key]
//                 hasMinSalary = key
//             }
//             report.averageSalary = averageSalary
//             report.hasMaxSalary = hasMaxSalary
//             report.hasMinSalary = hasMinSalary
//             console.log(report)
//         }
               
//     }  
    
//     getSalaryReport(salariesCompany)
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

        let pages = []

        for (let i = 1; i <= pagesCount; i++){
            pages.push(i)
        }

    return <div>
    <div>
        {pages.map(p => {
            return <span className={props.currentPage === p && styles.selectedPage} onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
        })}
       
    </div>
{props.users.map( u => <div key={u.id}>
    <span>
        <div>
            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={styles.userPhoto}/>
        </div>
        <div>
            {u.followed
            ? <button onClick={() => { props.unfollow(u.id)}}>Unfollow</button>
            : <button onClick={() => { props.follow(u.id)}}>Follow</button>}
            
        </div>
    </span>
    <span>
        <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
        </span>
        <span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
        </span>
        
    </span>
    </div>)    
    }
    </div>
}

export default Users