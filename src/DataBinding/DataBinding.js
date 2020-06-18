import React, { Component } from 'react'

export default class DataBinding extends Component {

    hocVien = {
        ma: 1,
        hoTen: 'Nguyen Van A',
        hinhAnh: 'https://picsum.photos/200/300',
    }

    // Phuowng thức  renderImg do mình tạo ra
    renderImg() {
        return <img src="https://picsum.photos/200/300" alt="123" />
    }
    render() {
        let title = 'hello fe 41';
        return (
            <div>
                <div className="container">
                    <div className="card text-left">
                        <img width={100} height={100} className="card-img-top" src={this.hocVien.hinhAnh} alt="" />
                        <div className="card-body">
                            <h4 className="card-title">{this.hocVien.hoTen}</h4>
                            <p className="card-text">Mã: {this.hocVien.ma}</p>
                        </div>
                    </div>
                </div>
                {/* Binding Biến */}
                <h1>{title}</h1>
                <input value={title} />
                {/* Binding phương thức */}
                {this.renderImg()}

            </div>
        )
    }
}
