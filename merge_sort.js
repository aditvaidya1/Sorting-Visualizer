function Merge_algo()
{
    
    document.getElementById("Worst").innerText="O(N log N)";
    document.getElementById("Average").innerText="Θ(N log N)";
    document.getElementById("Best").innerText="Ω(N log N)";

    document.getElementById("S_Worst").innerText="O(N)";

    delay_change=0;

    merge_partition(0,array_size-1);

    enable_btns();
}

function merge_sort(start,mid,end)
{
    var p=start,q=mid+1;

    var Arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=div_sizes[q++];
            update(divs[q-1],div_sizes[q-1],"red")  //Updating color
        }
        else if(q>end)
        {
            Arr[k++]=div_sizes[p++];
            update(divs[p-1],div_sizes[p-1],"red")
        }
        else if(div_sizes[p]<div_sizes[q])
        {
            Arr[k++]=div_sizes[p++];
            update(divs[p-1],div_sizes[p-1],"red")
        }
        else
        {
            Arr[k++]=div_sizes[q++];
            update(divs[q-1],div_sizes[q-1],"red")
        }
    }

    for(var t=0;t<k;t++)
    {
        div_sizes[start++]=Arr[t];
        update(divs[start-1],div_sizes[start-1],"green");//updating color
    }
}

function merge_partition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        update(divs[mid],div_sizes[mid],"yellow");// updating color

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
    }
}
