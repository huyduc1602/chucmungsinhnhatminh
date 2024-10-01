// Hà Nội 25/10/2020 https://github.com/AJLoveChina/birthday
var config = {
    //Độ dài của câu có thể là bất kỳ, bạn có thể viết mười câu hoặc hai mươi câu.
    // Cố gắng không vượt quá 15 từ trong mỗi câu, nếu không hiệu quả hiển thị có thể không tốt lắm
    texts: [
        "Gửi cho bé😘", //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "Trần Bình Minh", // 同上...
        "Người mà anh thương",
        "Sinh nhật tròn 25 tuổi của em",
        "Chúc mừng sinh nhật người yêu dấu của em!",
        "Mong rằng em sẽ có một ngày thật tuyệt vời và tràn đầy niềm vui",
        "Chúc anh có em và chúc chúng mình có được nhau",
        "Anh luôn mong mọi điều tốt đẹp nhất sẽ đến với em",
        "Anh cũng rất biết ơn vì có em trong cuộc đời của anh",
        "💌Minh xinh đẹp đáng yêu💌",
        "Gửi từ Hoàng Huy Đức",
    ],
    /**
     * imgs có thể để trống nhưng muốn điền thì phải theo định dạng bên dưới
     * "Tương ứng với văn bản trên, nó phải hoàn toàn giống nhau": "Địa chỉ ảnh, bạn có thể đưa ảnh vào thư mục imgs"
     * Ví dụ
     * "Bé yêu dễ thương": "./imgs/xiaokeai.jpg"
     *
     * Nếu bạn không muốn có hình, chỉ cần viết hai chú thích gạch chéo ở đầu mỗi dòng, ví dụ như hình bên dưới "Hôm nay là sinh nhật của bạn" sẽ không hiển thị :)
     * Mẹo: Hình tốt nhất nên dùng hình vuông hoặc gần vuông thì trông đẹp hơn
     */
    imgs: {
        "💌Minh xinh đẹp đáng yêu💌": "minhminh.jpg",
    },
    // Mô tả văn bản nút, sau đây là văn bản nút mặc định, bằng tiếng Anh, bạn có thể thay đổi nó thành văn bản yêu thích của mình
    desc: {
        turn_on: "Bắt đầu nào",
        play: "Mở nhạc thôi!",
        bannar_coming: "Ánh sáng nữa nhé",
        balloons_flying: "Bóng bay nè",
        cake_fadein: "Có thiếu gì không nhỉ?",
        light_candle: "Thổi nến nhé",
        wish_message: "Chúc mừng sinh nhật!",
        story: "Một tin nhắn cho em",
    }
};