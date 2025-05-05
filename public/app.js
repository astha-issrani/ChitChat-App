function confirmDelete(event){
    const confirmed=confirm("Are you sure you want to delete this chat?");
    if(!confirmed){
        event.preventDefault();
    }
}