import { toast } from "sonner";
import "./App.css";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Toaster } from "./components/ui/sonner";
import { Textarea } from "./components/ui/textarea";
import { cn } from "./lib/utils";

function App() {
  const isActive = true;

  return (
    <div>
      {/* 1. 타이포그래피 */}
      <div className="text-xs text-red-500">text-xs</div>
      <div className="text-sm text-[rgb(100,30,200)]">text-sm</div>
      <div className="text-lg font-bold">text-lg</div>
      <div className="text-xl font-extrabold">text-xl</div>
      <div className="text-2xl font-black">text-2xl</div>
      <div className="text-[13px]">text-13px</div>

      {/* 2. 백그라운드 컬러 */}
      <div className="bg-amber-500">amber-500</div>

      {/* 3. 사이즈 */}
      <div className="h-20 w-full bg-blue-500">box</div>

      {/* 4. 여백 */}
      <div className="m-5 h-50 w-50 bg-red-400 px-5 py-5">
        <div className="h-full w-full bg-blue-400"></div>
      </div>

      {/* 5. 보더 */}
      <div className="m-2 rounded-md border-2 border-red-500">border</div>

      {/* 6. 플렉스 컨테이너 */}
      <div className="flex items-start justify-evenly">
        <div className="h-10 w-10 border">1</div>
        <div className="h-20 w-10 flex-1 border">2</div>
        <div className="h-30 w-10 border">3</div>
        <div className="h-40 w-10 border">4</div>
      </div>

      {/* 7. shadcn 버튼 */}
      <div>
        <Button>버튼!</Button>
        <div className="text-primary">primary</div>
        <div className="text-muted">muted</div>
        <div className="text-destructive">destructive</div>
        <div
          className={cn(
            "w-10 text-sm",
            isActive ? "text-green-500" : "text-red-500",
          )}
        >
          isActive
        </div>
        <div>
          <Button>버튼!</Button>
          <Button variant={"destructive"}>버튼!</Button>
          <Button variant={"ghost"}>버튼!</Button>
          <Button variant={"link"}>버튼!</Button>
          <Button variant={"outline"}>버튼!</Button>
          <Button variant={"secondary"}>버튼!</Button>
        </div>
      </div>

      {/* 8. shadcn input */}
      <div className="p-5">
        <Input placeholder="입력..." />
      </div>

      {/* 9. shadcn textarea */}
      <div className="p-5">
        <Textarea />
      </div>

      {/* 10. shadcn sonner */}
      <div>
        <Button
          onClick={() => {
            toast("토스트 메시지", {
              position: "top-center",
            });
          }}
        >
          토스트 버튼
        </Button>
      </div>
      <div className="p-5">
        <Toaster />
      </div>
    </div>
  );
}

export default App;
