export interface DialogData {
    header: string,
    message: string,
}

export interface ToastMessage {
    toastType: number,
    message: string,
    key: string,
    isActive: boolean,
    class?:[string,string,string,string],
}