function Heap_algo()
{
    //Setting Time complexities
    document.getElementById("Worst").innerText="O(N log N)";
    document.getElementById("Average").innerText="Θ(N log N)";
    document.getElementById("Best").innerText="Ω(N log N)";

    //Setting Space complexity
    document.getElementById("S_Worst").innerText="O(1)";

    delay_change=0;

    heap_sort();
    
    enable_btns();
}

function swap(i,j)
{
    update(divs[i],div_sizes[i],"red");
    update(divs[j],div_sizes[j],"red");

    var temp=div_sizes[i];
    div_sizes[i]=div_sizes[j];
    div_sizes[j]=temp;

    update(divs[i],div_sizes[i],"red");
    update(divs[j],div_sizes[j],"red");

    update(divs[i],div_sizes[i],"blue");
    update(divs[j],div_sizes[j],"blue");
}

function max_heapify(n,i)
{
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && div_sizes[l]>div_sizes[largest])
    {
        if(largest!=i)
        {
            update(divs[largest],div_sizes[largest],"blue");
        }

        largest=l;

        update(divs[largest],div_sizes[largest],"red");
    }

    if(r<n && div_sizes[r]>div_sizes[largest])
    {
        if(largest!=i)
        {
            update(divs[largest],div_sizes[largest],"blue");
        }

        largest=r;

        update(divs[largest],div_sizes[largest],"red");
    }

    if(largest!=i)
    {
        swap(i,largest);

        max_heapify(n,largest);
    }
}

function heap_sort()
{
    for(var i=Math.floor(array_size/2)-1;i>=0;i--)
    {
        max_heapify(array_size,i);
    }

    for(var i=array_size-1;i>0;i--)
    {
        swap(0,i);
        update(divs[i],div_sizes[i],"green");
        update(divs[i],div_sizes[i],"yellow");

        max_heapify(i,0);

        update(divs[i],div_sizes[i],"blue");
        update(divs[i],div_sizes[i],"green");
    }
    update(divs[i],div_sizes[i],"green");
}
