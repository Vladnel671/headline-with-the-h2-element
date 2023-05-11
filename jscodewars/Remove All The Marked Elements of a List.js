Array.prototype.remove_ = function(integer_list, values_list){
    const s = new Set(values_list);
    return integer_list.filter(e => !s.has(e));
}