import Alur from "@/components/organism/alurPPT";
import JumlahFasilitas from "@/components/organism/jumlahFasilitas";
import Navbar from "@/components/organism/navbar";
import Pemberitahuan from "@/components/organism/pemberitahuan";
import Welcome from "@/components/organism/welcome";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Pemberitahuan />
      <Alur />
      <JumlahFasilitas />
    </div>
  );
}
