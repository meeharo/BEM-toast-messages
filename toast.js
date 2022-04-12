function toast({
    tittle = '', 
    message = '', 
    type = '', 
    duration = 3000,
}) {
    const main = document.getElementById('toast'); //Gắn biến cho #toast
    if (main) {
        const toast = document.createElement('div');

        // Auto remove toast
        const autoRemovedId =  setTimeout (function() {  
            main.removeChild(toast);
        }, duration + 1000); //sau khi duration hết thì remove toast

        // Remove toast when clicked
        toast.onclick = function(e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemovedId);
            }
        }

        const icons = {         
            success: 'fas fa-check-circle',
            info: 'fas fa-info-circle',
            warning: 'fas fa-exclamation-circle',
            error: 'fas fa-exclamation-circle',
        };
        const icon = icons[type]; //định dạng cho type

        const delay = (duration / 1000).toFixed(2); //tofixed: chỉ lấy 2 số thập phân

        toast.classList.add('toast', `toast--${type}`); //toast dc chay
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`; 
            /* fadeOut: 3s sau mới mờ đi trong 1s; forwards: mờ đi hết */
            
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__tittle">${tittle}</h3> 
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fas fa-times"></i>
            </div>
        `;
        main.appendChild(toast); //add toast vào

    }
}
// => Khi hàm #toast (main) được gọi thì nó sẽ đọc thông tin truyền vào => tạo ra div .toast success 