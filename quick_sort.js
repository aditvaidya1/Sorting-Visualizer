
function Quick_algo()
{
    document.getElementById("Worst").innerText="O(N^2)";
    document.getElementById("Average").innerText="Θ(N log N)";
    document.getElementById("Best").innerText="Ω(N log N)";

    document.getElementById("S_Worst").innerText="O(log N)";

    delay_change=0;

    quick_sort(0,array_size-1);

    enable_btns();
}

function quick_partition (start, end)
{
    var i = start + 1;
    var piv = div_sizes[start] ;//make the first element as pivot element.
    update(divs[start],div_sizes[start],"yellow");

        for(var j =start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (div_sizes[ j ] < piv)
            {
                update(divs[j],div_sizes[j],"yellow");

                update(divs[i],div_sizes[i],"red");
                update(divs[j],div_sizes[j],"red");

                var temp=div_sizes[i];
                div_sizes[i]=div_sizes[j];
                div_sizes[j]=temp;

                update(divs[i],div_sizes[i],"red");//Height update
                update(divs[j],div_sizes[j],"red");//Height update

                update(divs[i],div_sizes[i],"blue");//Height update
                update(divs[j],div_sizes[j],"blue");//Height update

                i += 1;
            }
    }
    update(divs[start],div_sizes[start],"red");//Color update
    update(divs[i-1],div_sizes[i-1],"red");
    
    var temp=div_sizes[start];//put the pivot element in its proper place.
    div_sizes[start]=div_sizes[i-1];
    div_sizes[i-1]=temp;

    update(divs[start],div_sizes[start],"red");//Height update
    update(divs[i-1],div_sizes[i-1],"red");//Height update

    for(var t=start;t<=i;t++)
    {
        update(divs[t],div_sizes[t],"green");
    }

    return i-1;//return the position of the pivot
}

function quick_sort (start, end )
{
    if( start < end )
    {
        //stores the position of pivot element
        var piv_pos = quick_partition (start, end ) ;     
        quick_sort (start, piv_pos -1);//sorts the left side of pivot.
        quick_sort (piv_pos +1, end) ;//sorts the right side of pivot.
    }
 }
