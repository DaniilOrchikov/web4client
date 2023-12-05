import React, {Component} from 'react'
import PointsService from "../services/PointsService";
import Swal from 'sweetalert2'

class Table extends Component {

    clear = () => {
        if (document.getElementsByTagName("tr").length) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You will not be able to restore it!",
                icon: 'warning',
                backdrop: 'transparent',
                customClass: 'alert',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, clean up!',
                cancelButtonText: 'Cancel',
                didOpen: () => {
                    document.querySelector('.swal2-container').style.backdropFilter = 'blur(5px)';
                },
                willClose: () => {
                    document.querySelector('.swal2-container').style.backdropFilter = 'none';
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    this.props.refresh_points([])
                    PointsService.delete_points();
                }
            })
        }else Swal.fire(
            {
                title: 'It\'s clear!',
                text: 'The table has already been cleared.',
                customClass: 'alert',
                backdrop: 'transparent',
                didOpen: () => {
                    document.querySelector('.swal2-container').style.backdropFilter = 'blur(5px)';
                },
                willClose: () => {
                    document.querySelector('.swal2-container').style.backdropFilter = 'none';
                }
            }
        )
    }

    render() {
        return (
            <div className="tbl">
                <div className="tbl-header">
                    <div><div>X</div><div>Y</div><div>R</div><div>HIT</div></div>
                </div>
                <div className="tbl-content">
                    <table cellPadding="0" cellSpacing="0" border="0">
                        <tbody>
                        {this.props.points.reverse().map((point) => {
                            return (
                                <tr>
                                    <td>{Math.round(point.x * 100) / 100}</td>
                                    <td>{Math.round(point.y * 100) / 100}</td>
                                    <td>{point.r}</td>
                                    <td>{point.hit ? "True" : "False"}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
                <button className={"clear_button"} onClick={this.clear}>Clear</button>
            </div>
        )
    }
}

export default Table