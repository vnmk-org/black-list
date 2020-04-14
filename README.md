# black-list
Blacklist for Vietnam Mechinical Keyboard market.

Sửa file data.js để thêm người vào blacklist.

Mẫu json cho người bị block:

```
    {
        "name": "", // Tên người
        "fbid": "", // Lấy fbid ở đây: https://lookup-id.com/
        "phone": "", // Điện thoại liên hệ
        "bank": [],  // danh sách tài khoản bank
        "address": "", // địa chỉ
        "description": "", // nội dung block
        "post": "", // bài viết gốc / bóc phốt
        "posts": [], // các bài viết gốc / bóc phốt
        "tags": [] // các nickname, tên clone, mã tag để dễ search
        "clone": [] // danh sách link fb clone
    }
```